import { Flex } from "@chakra-ui/react";

import { useMyIntl } from "../../../common";
import { MyContent } from "../../../common/components/MyContent";
import HeadSearch from "./components/HeadSearch";
import PageCardSwiper from "./components/PageCardSwiper";
import PageContactUs from "./components/PageContactUs";
import PageHelpByTopic from "./components/PageHelpByTopic";
import PageTitle from "./components/PageTitle";
import PageTopArticles from "./components/PageTopArticles";
import PageTroubleshooting from "./components/PageTroubleshooting";

export default () => {
  const { lang } = useMyIntl("help");
  return (
    <Flex flexDir="column">
      <HeadSearch lang={lang} />
      <MyContent w="100%">
        <PageTitle icon="" title={lang?.title1} />
        <PageTroubleshooting />
        <PageTitle icon="" title={lang?.title2} />
        <PageHelpByTopic />
        <PageTitle icon="" title={lang?.title3} />
        <PageCardSwiper />
        <PageTitle icon="" title={lang?.title4} />
        <PageTopArticles />
        <PageContactUs lang={lang} />
      </MyContent>
    </Flex>
  );
};
