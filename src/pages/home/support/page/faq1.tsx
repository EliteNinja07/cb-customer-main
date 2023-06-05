import Aitradelearn from "@/assets/images/aitradelearn.svg";
import {
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MyContent } from "../../../../common";
const styles = {
  Fiexs: {
    position: "fixed",
    top: "100px",
    background: "#f2f2f2",
    _dark: { background: "#333" },
  },
  Relative: {
    position: "relative",
    top: "0",
    background: "#f2f2f2",
    _dark: { background: "#333" },
  },
};
export default () => {
  const [getFixed, setFixed] = useState({});
  const onScroll = (e: any) => {
    if (e.target.documentElement.scrollTop > 300) {
      setFixed(styles.Fiexs);
    } else {
      setFixed(styles.Relative);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <MyContent w={{ base: "100%", sm: "100%", md: "100%", lg: "1300px" }}>
      <Flex w="full" flexDir="column">
        <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="2rem" py={3}>
          How to use AI trade to create an annual rate of return of over 1000%,
          we unveil its mystery layer by layer.
        </Text>
        <Text color="#5b616e">
          How to wisely select the financial management project with the highest
          profit and the least risk among the numerous investments?
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={Aitradelearn} w="full" />
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="AiTrade"
            >
              The conceptual premise of Ai trade?
            </Text>
            <Text fontSize="1.2rem" color="#5b616e">
              Ai trade started project planning as early as 2016 when ETH
              launched the concept of merger, but due to the progress of ETH
              merger, the project could not be implemented. Finally, the merger
              of ETH was completed on 2022-9-15, Ai trade has the opportunity to
              go online with all cryptocurrencies Investors meet.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="WhatIsAi"
            >
              Why does Ai trade need ether chain merger?
            </Text>
            <Text fontSize="1.2rem" color="#5b616e">
              Ethereum’s move to Proof-of-Stake is expected to result in a 99%
              reduction in energy consumption, a shift that represents a quantum
              leap in blockchain security and long-term scalability. This point
              (the transaction fee is earned from the mining miners and is
              earned by the pledged investors) is of great significance to Ai
              trade. Through this feature, Ai trade can obtain stable income
              from the funds of all cryptocurrency investors through pledge. ,
              and more importantly, the pledge amount is not limited, and the
              pledge time is flexible and changeable. There is no risk to the
              pledge and the pledgee, and at the same time, more stable income
              can be obtained.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="WhatAi"
            >
              What is Ai Trade?
            </Text>
            <Text fontSize="1.2rem" color="#5b616e">
              Ai Trade is an intelligent one-click custody financial transaction
              system developed by coinbase. Many cryptocurrency holders invest
              in decentralized finance (DeFi) protocols in the hope of
              generating additional income, but the process is complex, costly,
              and highly risky, and the annual percentage yield (APY) generated
              is often varied As expected. After the merger of the Ethereum
              chain, Coinbase, in order to allow more cryptocurrency holders to
              participate and benefit, after a comprehensive analysis of various
              DeFi projects, it has sorted out three types of investment: pledge
              | loan | liquidity pool, as the basis for financial management ,
              Through systematic analysis of the project, Ai Trade will
              automatically match projects with high and stable returns for
              diversified investment (invest 3-4 different types of products at
              one time to avoid losses in one project and generate negative
              returns), in this process , cryptocurrency holders only need to
              authorize Ai Trade with one click, and can obtain stable passive
              income without professional knowledge and cumbersome operations.
              In each round of investment, Ai Trade will keep up to 10% APY as
              dividends (all dividends will be automatically converted into
              equivalent USDC tokens) and return them to wealth management
              investors. The excess will go to the prize pool. When the prize
              pool is greater than 1 million USDC, 50% (ie 500,000 USDC) will be
              returned to investors in the form of airdrop tokens, and the
              return amount will be based on the investor's loyalty value (when
              making a round of investment, more than 10% of the amount
              transferred to the prize pool %APY bonus will constitute loyalty
              value) for distribution, and investors can receive the
              corresponding bonus within a limited time. Ai Trade provides a
              leverage model, which all investors can obtain after promotion,
              with a maximum leverage of up to 125, and an astonishing APY of
              1250% (simple interest). After setting the leverage, Ai trade will
              automatically apply for a loan to the system prize pool (investors
              can set it in Ai Trade, and the loan amount varies according to
              the investor's level). After the current round of investment is
              completed, the loan will be repaid automatically. Ai Trade
              provides investors with negative profit protection measures. When
              the investment income in this round of investment is less than 5%
              APY or the position is closed, Ai Trade will automatically
              withdraw the bonus from the prize pool (withdrawal amount =
              loyalty value) and return it to Investors, the minimum profit is
              guaranteed. When the investor's loyalty value is insufficient,
              they can earn more loyalty value within a week to complete the
              minimum profit guarantee operation. More than a week will result
              in loss of funds. When the prize pool is insufficient, or the
              investor does not open the automatic loan, the investor needs to
              increase the position. If there is no increase in the position,
              there will be a loss of investment principal. If the prize pool in
              this round has been emptied, the investors have enough loyalty
              points, and they have also carried out the operation of adding
              positions, and there is also a negative profit, the prize pool
              will be accumulated in the next round, and the investors who meet
              the conditions will be given priority to repay to ensure the
              investor's income for each round , there is no time limit for this
              operation, members can check the progress in Assets {"->"}Pending.
            </Text>
          </WrapItem>
          <WrapItem
            w="400px"
            sx={{ display: { base: "none", sm: "none", lg: "block" } }}
          >
            <Flex bg="#eef0f3" sx={getFixed} py="0.8rem" px="1.2rem">
              <List>
                <ListItem fontSize="1rem" lineHeight="1.8rem" pb={2}>
                  <Link href="#AiTrade">
                    The conceptual premise of Ai trade?
                  </Link>
                </ListItem>
                <ListItem fontSize="1rem" lineHeight="1.8rem" pb={2}>
                  <Link href="#WhatIsAi">
                    Why does Ai trade need ether chain merger?
                  </Link>
                </ListItem>
                <ListItem fontSize="1rem" lineHeight="1.8rem" pb={2}>
                  <Link href="#WhatAi">What is Ai Trade?</Link>
                </ListItem>
                <ListItem fontSize="1rem" lineHeight="1.8rem" pb={2}>
                  <Link href="#WhatAi">What is staking?</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
