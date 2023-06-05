import { useIntl } from "react-intl";

export function useMyIntl(key: string) {
  const intl = useIntl();
  const result = intl?.formatMessage({
    id: key,
  });
  const lang = result === key ? undefined : JSON.parse(decodeURI(result));
  return { lang };
}
