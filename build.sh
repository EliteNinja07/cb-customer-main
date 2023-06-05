# args
PROJECT_NAME=$(git remote show origin | grep "Fetch URL:" | sed "s/.*\/\(.*\)\.git/\1/")
TAG=$(git rev-parse --short HEAD)
BRANCH=$(git rev-parse --abbrev-ref HEAD)

function send_telegram() {
    TOKEN="6114567019:AAFTcCoengozNE4N1y_PF41w6a7CwISSfEs"
    CHAT_ID="-919358118"
    MESSAGE="$1"
    curl -s "https://api.telegram.org/bot${TOKEN}/sendMessage" -d "chat_id=${CHAT_ID}&text=${MESSAGE}" > /dev/null
}

function error_handler {
  echo "Docker build failed. Exiting script."
  send_telegram "Docker build failed: ${PROJECT_NAME} ${BRANCH}"
  exit 1
}

send_telegram "Start build: ${PROJECT_NAME} ${BRANCH}"

# build
docker build --build-arg BRANCH=${BRANCH} --cache-from "${PROJECT_NAME}":deps --target deps -t "${PROJECT_NAME}":deps "." || error_handler
docker build --build-arg BRANCH=${BRANCH} --cache-from "${PROJECT_NAME}":deps -t "${PROJECT_NAME}":"${TAG}" "." || error_handler

# remove old
CONTAINER=$(docker ps -a --format '{{.Names}}' | grep "${PROJECT_NAME}" | awk '{print $1}')
if [ -n "${CONTAINER}" ]; then
    docker stop "${CONTAINER}" && docker rm "${CONTAINER}" || error_handler
fi

# run new
docker run -d --restart always \
    --name "${PROJECT_NAME}" \
    --network my_network \
    "${PROJECT_NAME}":"${TAG}"

# clean image
IMAGE=$(docker images | grep "${PROJECT_NAME}" | grep -v "${TAG}" | grep -v "deps" | awk '{print $3}')
if [ -n "${IMAGE}" ]; then docker rmi -f ${IMAGE}; fi

send_telegram "End build: ${PROJECT_NAME} ${BRANCH}"
