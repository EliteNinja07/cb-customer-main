import { Select } from "@chakra-ui/react";
import { CaseSubjectTypeEnum } from "../../consts/Enums";
import { FormattedMessage } from "react-intl";

export default ({ ...rest }: any) => {
  let option: any = [];
  CaseSubjectTypeEnum.map((res: any) => {
    option.push(res[0]);
  });
  return (
    <Select {...rest}>
      {option?.map((res: any, index: number) => {
        return (
          <option value={res} key={`${res}_${index}`}>
            <FormattedMessage id={`text.` + res} />
          </option>
        );
      })}
    </Select>
  );
};
