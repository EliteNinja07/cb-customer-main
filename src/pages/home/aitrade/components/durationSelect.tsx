import { Text, Select } from "@chakra-ui/react";

export default ({ defaultValue, onChange }: any) => {
  return defaultValue ? (
    <Select
      border="0px"
      fontSize="1.2rem"
      textAlign="center"
      placeholder="Leverage"
      //   defaultValue={defaultValue}
      value={defaultValue}
      size="sm"
      onChange={(e: any) => {
        onChange(e.target.value, defaultValue);
      }}
    >
      <option value="3">3</option>
      <option value="7">7</option>
      <option value="15">15</option>
      <option value="30">30</option>
      <option value="60">60</option>
      <option value="90">90</option>
      <option value="180">180</option>
      <option value="360">360</option>
    </Select>
  ) : (
    <Text
      w="full"
      sx={{
        textAlign: "center",
        fontSize: "1.2rem",
      }}
    >
      -
    </Text>
  );
};
