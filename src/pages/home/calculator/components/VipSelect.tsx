import { Select, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMyToast, request } from "../../../../common";

const styles = {
  InputC: {
    border: "1px solid #89909e",
    borderRadius: "8px",
    padding: "0 0.5rem",
  },
};

export default ({ ...field }: any) => {
  const { showRes } = useMyToast();
  const [option, setOption] = useState([]);
  useEffect(() => {
    request("vip/select", {})
      .then((res) => {
        setOption(res?.data);
        console.log(res, "res");
      })
      .catch(showRes);
  }, []);
  return (
    <Flex sx={styles.InputC}>
      <Select
        variant="unstyled"
        w="100%"
        py={2}
        onChange={(e: any) => {}}
        {...field}
      >
        {option?.map((res: any) => {
          return (
            <option value={res?.value} key={res?.value}>
              {res?.label}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};
