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
      <option value="1">1x</option>
      <option value="5">5x</option>
      <option value="10">10x</option>
      <option value="20">20x</option>
      <option value="40">40x</option>
      <option value="60">60x</option>
      <option value="80">80x</option>
      <option value="100">100x</option>
      <option value="120">120x</option>
      <option value="125">125x</option>
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
