import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useIntl } from "react-intl";

export default ({ onChange }: any) => {
  const intl = useIntl();
  const TTabs = [
    intl.formatMessage({ id: "text.ThisRound" }),
    intl.formatMessage({ id: "text.PreviousRound" }),
  ];
  return (
    <Tabs
      isFitted
      w="full"
      size="lg"
      colorScheme="messenger"
      px={6}
      onChange={onChange}
    >
      <TabList>
        {TTabs?.map((res: any, index: number) => {
          return (
            <Tab
              fontWeight="var(--cds-fontWeights-medium)"
              key={"earn_tab_" + index}
              sx={{
                borderTop: "0",
                borderLeft: "0",
                borderRight: "0",
              }}
            >
              {res}
            </Tab>
          );
        })}
      </TabList>
    </Tabs>
  );
};
