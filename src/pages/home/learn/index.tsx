import { MyContent } from "../../../common/components/MyContent";
import PageHead from "./components/PageHead";

import learnicon1 from "@/assets/images/learnicon1.svg";
import learnicon2 from "@/assets/images/learnicon2.svg";
import learnicon3 from "@/assets/images/learnicon3.svg";
import { Divider, Flex, SimpleGrid } from "@chakra-ui/react";
import { useMyIntl } from "../../../common";
import LearnColumn from "./components/LearnColumn";
import PageBasics from "./components/PageBasics";
import PageEarnFree from "./components/PageEarnFree";

export default () => {
  const { lang } = useMyIntl("learn");
  return (
    <>
      <MyContent>
        <Flex flexDir="column">
          <PageHead />
        </Flex>
        <SimpleGrid
          pt={5}
          pb={7}
          columns={{ base: 1, sm: 1, md: 3, lg: 3 }}
          w={{ base: "100%", sm: "100%", md: "1000px", lg: "1270px" }}
          alignItems="center"
          justifyContent="center"
          margin="0 auto"
          flexWrap="wrap"
        >
          <LearnColumn
            href="#Crypto-Basics"
            label="Crypto basics"
            height="56px"
            icon={learnicon3}
          />
          <LearnColumn
            href="#Tips-and-tutorials"
            label="Tips and tutorials"
            height="56px"
            icon={learnicon2}
            py={{ base: 10, sm: 10, md: 0, lg: 0 }}
          />
          <LearnColumn
            href="#Glossary"
            label="Glossary"
            height="56px"
            icon={learnicon1}
          />
        </SimpleGrid>
      </MyContent>
      <Divider />
      <MyContent>
        <PageBasics />
      </MyContent>
      <Divider />
      <MyContent>
        <PageEarnFree lang={lang} />
      </MyContent>
    </>
  );
};
