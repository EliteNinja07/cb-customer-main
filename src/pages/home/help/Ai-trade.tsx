import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import MyIconTitle1 from "@/assets/images/help/ProAppIcon.svg";
import { useEffect, useState } from "react";
import GettingFooter from "./components/GettingFooter";
import { useMyIntl } from "../../../common";
import { Link } from "react-router-dom";

const styles = {
  helpSearchC: {
    width: "100%",
    minHeight: "calc(100vh - 68px - 64px)",
    display: "block",
  },
  headSearch: {
    border: "1px solid #5b636ea8",
    height: "60px",
    alignItems: "center",
    margin: "24px 0",
    borderRadius: "50px",
  },
  headIcon: {
    padding: "0 1.6rem",
  },
  headClone: {
    padding: "0 1.3rem",
  },
  gettingList: {
    padding: "2rem 0 1rem 0",
  },
  ListItems: {
    lineHeight: "2rem",
    "&:hover": {
      color: "#1652f0",
      textDecoration: "underline",
    },
  },
  GettingRightFixed: {
    borderLeft: "1px solid #98989829",
    fontSize: "14px",
    position: "fixed",
    top: "100px",
  },
  GettingRightRel: {
    borderLeft: "1px solid #98989829",
    fontSize: "14px",
    position: "relative",
    top: "0",
  },
  footers: {
    backgroundColor: "#90909024",
    padding: "6rem 0",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "2rem",
  },
  CellLink: {
    color: "#050f19",
    borderLeft: "4px solid #fff",
    padding: "0.35rem 0 0.35rem 1rem",
  },
  RAcives: {
    borderLeft: "4px solid #1652f0",
    color: "#1652f0",
    padding: "0.35rem 0 0.35rem 1rem",
  },
};
export default () => {
  const [getFixed, setFixed] = useState<any>(styles.GettingRightRel);
  const onScroll = (e: any) => {
    if (document.body.clientWidth > 768) {
      if (e.target.documentElement.scrollTop > 100) {
        setFixed(styles.GettingRightFixed);
      } else {
        setFixed(styles.GettingRightRel);
      }
    }
  };
  const resizeUpdate = (e: any) => {
    if (document.body.clientWidth < 768) {
      setFixed(styles.GettingRightRel);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", resizeUpdate);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("resize", resizeUpdate);
    };
  });
  const { lang } = useMyIntl("CoinbaseWallet");
  return (
    <Flex sx={styles.helpSearchC}>
      <Flex w="100%" flexDir="column" margin="0 auto" px={5}>
        <Flex pt={10} flexWrap="wrap">
          <Flex
            flexDir="column"
            flex="1"
            sx={{
              padding: {
                base: "0 0.2rem",
                sm: "0 0.2rem",
                md: "0 2rem 0 0",
                lg: "0 2rem 0 0",
              },
            }}
          >
            <Flex>
              <Breadcrumb color="#708599" fontSize="13px">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/home/help">
                    Coinbase Help Center
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>Ai Trade</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Flex alignItems="center" pt={10}>
              <Image boxSize="58px" marginRight="30px" src={MyIconTitle1} />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize={{
                  base: "1.75rem",
                  sm: "1.75rem",
                  md: "2.5rem",
                  lg: "2.5rem",
                }}
                pl={3}
              >
                Ai Trade
              </Text>
            </Flex>
            <Flex flexDir="column" sx={styles.gettingList}>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                Getting started
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Ai-Trade-exactly">
                    What is Ai Trade, exactly?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-do-I-need-to-start-an-account">
                    What do I need to start an account?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Whats-a-wallet">What’s a ‘wallet’?</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-connect-my-wallets">
                    How do I connect my wallets?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Supported-countries">
                    Supported countries
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Supported-Networks">
                    Supported Networks
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                Protecting my account
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Verifying-emails-and-protecting-accounts">
                    Verifying emails and protecting accounts
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Common-scams-and-how-to-avoid-them">
                    Common scams and how to avoid them
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-type-of-security-does-Ai-Trade-provide">
                    What type of security does Ai Trade provide?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Report-potential-scams-and-fraud">
                    Report potential scams and fraud
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Whats-a-verified-account-and-why-does-it-matter">
                    What's a verified account, and why does it matter?
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                Managing my account
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-edit-my-username-or-profile">
                    How do I edit my username or profile?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/How-to-check-my-VIP-level-and-personal-permissions">
                    How to check my VIP level and personal permissions?
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                Ai Trade function analysis
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/what-is-staking">what is staking？</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-defi">What is DeFi?</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-leverage-Whats-the-use-of-turning-it-on">
                    What is leverage? What's the use of turning it on?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/what-is-APY">what is APY?</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Loyalty-Value-What-does-it-do">
                    What is Loyalty Value? What does it do?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-a-node-and-how-many-nodes-earn-a-day">
                    What is a node, and how many nodes earn a day?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-many-tokens-will-Ai-Trade-automatically-invest-in-each-round">
                    How many tokens will Ai Trade automatically invest in each
                    round?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-are-the-types-of-investment-periods-and-what-are-the-differences">
                    What are the types of investment periods and what are the
                    differences?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Loyalty-Ranking">
                    What is Loyalty Ranking?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Automatic-exchange">
                    What is Automatic exchange?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Profit-guarantee">
                    What is Profit guarantee?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Leveraged-investment">
                    What is Leveraged investment?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Auto-loan-repayment">
                    What is Auto loan repayment?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Liquidation-protection">
                    What is Liquidation protection?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-E-mail-notification">
                    What is E-mail notification?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Automatic-Airdrop-Bonus">
                    What is Automatic Airdrop Bonus?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Automatic-staking">
                    What is Automatic staking?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/What-is-Automatic-withdrawal">
                    What is Automatic withdrawal?
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                Rewards
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Identity-Verification-Rewards">
                    Identity Verification Rewards
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Referral-Rewards">Referral Rewards</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Referral-member-income-commission-Reward">
                    Referral member income commission Reward
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Trial-Bonus -Earnings-Rewards">
                    Trial Bonus Earnings Rewards
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                Staking and Withdrawal
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-are-the-tokens-that-support-staking">
                    What are the tokens that support staking?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-the-minimum-staking-amount-for-a-single-transaction?">
                    What is the minimum staking amount for a single transaction?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-do-I-need-to-verify-the-balance-for-withdrawal">
                    Why do I need to verify the balance for withdrawal?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-long-does-it-take-for-the-withdrawal-to-arrive">
                    How long does it take for the withdrawal to arrive?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-the-minimum-withdrawal-amount">
                    What is the minimum withdrawal amount?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Is-there-a-fee-for-withdrawals">
                    Is there a fee for withdrawals?
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                Support
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Text as="li" display="list-item" pt={6}>
                    <Link to="/home/help/How-to-use-the-support-system">
                      How to use the support system?
                    </Link>
                  </Text>
                </Text>
              </Text>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          >
            <div style={getFixed}></div>
          </Flex>
        </Flex>
      </Flex>
      <GettingFooter />
    </Flex>
  );
};
