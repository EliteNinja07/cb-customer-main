import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Defi from "../../../../assets/images/coinbase-lend.svg";
import Mining from "../../../../assets/images/Copy_of_Learn_Illustration_What_is_Mining.svg";
import Retirement from "../../../../assets/images/Crypto___Retirement_Op2-D.svg";
import debunking from "../../../../assets/images/debunking-bitcoin-myths-1__2_.svg";
import Dollar from "../../../../assets/images/Dollar-Cost_avg.svg";
import DonatingCrypto from "../../../../assets/images/Donating-Crypto.svg";
import EarningRewards from "../../../../assets/images/Earning-Rewards.svg";
import Equity from "../../../../assets/images/Former_Private_Equity__1_.svg";
import Group_31612615 from "../../../../assets/images/Group_31612615.svg";
import icp from "../../../../assets/images/icp.svg";
import image from "../../../../assets/images/image.svg";
import Key from "../../../../assets/images/Learn_Illustration_Private_Key.svg";
import Blockchain from "../../../../assets/images/Learn_Illustration_Ultimate_Guide_Blockchain.svg";
import Essential from "../../../../assets/images/Learn_Illustration_Ultimate_Guide_Essential_Reading.svg";
import Fork from "../../../../assets/images/Learn_Illustration_What_is_a_Fork.svg";
import Protocol from "../../../../assets/images/Learn_Illustration_What_is_a_Protocol.svg";
import SmartContract from "../../../../assets/images/Learn_Illustration_What_is_a_Smart_Contract__1_.svg";
import Stablecoin from "../../../../assets/images/Learn_Illustration_What_is_a_Stablecoin.svg";
import Token from "../../../../assets/images/Learn_Illustration_What_is_a_Token.svg";
import Cryptography from "../../../../assets/images/Learn_Illustration_What_is_Cryptography.svg";
import Cefi from "../../../../assets/images/Learn_Illustration_What_is_DeFi.svg";
import Marketcap from "../../../../assets/images/Learn_Illustration_What_is_Marketcap.svg";
import Staking from "../../../../assets/images/Learn_Illustration_What_is_Staking.svg";
import Technical from "../../../../assets/images/Learn_Illustration_What_is_Technical_Analysis__1_.svg";
import lightningnetwork from "../../../../assets/images/lightning-network.svg";
import Candlesticks from "../../../../assets/images/Making-Sense-Of-Candlesticks.svg";
import polkadot from "../../../../assets/images/polkadot.svg";
import polygon from "../../../../assets/images/polygon1.svg";
import seedphrase from "../../../../assets/images/seed-phrase.svg";
import Sending_Crypto from "../../../../assets/images/Sending_Crypto.svg";
import taxes from "../../../../assets/images/taxes__1_.svg";
import Bitcoin from "../../../../assets/images/Ultimate_Guide_Bitcoin.svg";
import Video_02 from "../../../../assets/images/Video_02.svg";
import Volatility from "../../../../assets/images/Volatility.svg";
import Weathering from "../../../../assets/images/Weathering-the-crypto-dip.svg";
import bullbear from "../../../../assets/images/what-are-a-bull-and-bear-market-2_2.svg";
import Ethereum from "../../../../assets/images/what-is-ethereum.svg";
import uniswap from "../../../../assets/images/What-is-uniswap.svg";
import CryptoWallet from "../../../../assets/images/What_is_a_Crypto_Wallet.svg";
import Inflation from "../../../../assets/images/What_is_Inflation_Rate.svg";
const styles = {
  CoverImgC: {
    overflow: "hidden",
    width: "100%",
  },
  CoverImg: {
    _hover: {
      transition: " transform 5s",
      transform: "scale(1.05)",
      opacity: "0.9",
    },
  },
};
export default () => {
  return (
    <Flex flexDir="column" py={10}>
      <Text
        as="b"
        fontSize="3rem"
        w="full"
        textAlign="center"
        pt="3rem"
        id="Tips-and-tutorials"
      >
        Tips and tutorials
      </Text>
      <Text w="full" color="#5b616e" textAlign="center">
        Get practical, step-by-step answers to all things crypto
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
        spacing={20}
        mt="3rem"
        pb="3rem"
        borderBottom="1px solid var(--cds-colors-chakra-border-color)"
      >
        <Link to="/home/learn/How-to-earn-crypto-rewards">
          <Flex flexDir="column" w="full">
            <Flex sx={styles.CoverImgC}>
              <Image src={EarningRewards} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Getting started
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              How to earn crypto rewards
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                From staking to lending, five of the best ways to grow your
                crypto
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/How-to-set-up-a-crypto-wallet">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Video_02} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Video Tutorial
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              How to set up a crypto wallet
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Learn about different kinds of crypto wallets and how to set
                them up.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/how-to-read-candlestick-charts">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Candlesticks} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Video tutorial
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              How to read candlestick charts
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                When researching assets, you may run into a special form of
                price graph called candlestick charts. Here's how they work.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/when-is-the-best-time-to-invest-in-crypto">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Dollar} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Video Tutorial
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              When is the best time to invest in crypto?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                When prices are fluctuating, how do you know when to buy? Learn
                more about using dollar-cost averaging to weather price
                volatility.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/how-to-send-crypto">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Sending_Crypto} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Video Tutorial
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              How to send crypto
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Learn how to send crypto to another wallet — to a friend, family
                member, or store.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/how-to-donate-crypto">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={DonatingCrypto} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Getting Started
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              How to donate crypto
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Bitcoin, ETH, and other cryptocurrencies can make your giving go
                farther. Plus: 15 nonprofit orgs that accept crypto
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/expert-tips-ben-forman">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Equity} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Expert tips
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              Expert tips: A former private equity manager who now funds DeFi
              tech
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                ParaFi Capital managing partner Ben Forman breaks down some key
                DeFi concepts
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/how-to-minimize-your-losses-during-a-falling-market">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Weathering} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Your crypto
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              From avoiding FOMO to having a plan, 5 key ways to manage a crypto
              down cycle
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                How to minimize your losses (and even make savvy moves) during a
                falling market
              </Text>
            </Heading>
          </Flex>
        </Link>
      </SimpleGrid>
      <Text
        as="b"
        fontSize="3rem"
        w="full"
        textAlign="center"
        pt="3rem"
        id="Crypto-Basics"
      >
        Crypto basics
      </Text>
      <Text w="full" color="#5b616e" textAlign="center">
        New to crypto? Not for long — start with these guides and explainers
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
        spacing={20}
        mt="3rem"
        pb="1.5rem"
      >
        <Link to="/home/learn/What-is-Ethereum">
          <Flex flexDir="column" w="full">
            <Flex sx={styles.CoverImgC}>
              <Image src={Ethereum} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Beginner's guide
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is Ethereum?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Ethereum is the second-biggest cryptocurrency by market cap
                after Bitcoin. It is also a decentralized computing platform
                that can run a wide variety of applications — including the...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-bitcoin">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Bitcoin} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Beginner's guide
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is Bitcoin?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Bitcoin is the world's first widely adopted cryptocurrency — it
                allows for secure and seamless peer-to-peer transactions on the
                internet.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-cryptocurrency">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={CryptoWallet} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Beginner's guide
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is cryptocurrency?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Bitcoin, Ethereum, and other crypto are revolutionizing how we
                invest, bank, and use money. Learn more in this beginner's
                guide.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-a-blockchain">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Blockchain} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Beginner's guide
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is a blockchain?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Cryptocurrencies like Bitcoin and Ethereum are powered by a
                technology called the blockchain.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/What-is-Staking">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Staking} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Beginner's guide
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is Staking?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Staking lets you earn rewards by helping verify transactions and
                secure the blockchain. It is faster and more efficient that
                other methods.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/crypto-retirement-account">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Retirement} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Your crypto
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              How to invest in crypto via your retirement account
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Over the last few years, Bitcoin and other cryptocurrencies have
                fast emerged as a truly mainstream asset class with a
                multi-trillion dollar market capitalization. As a result many...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/understanding-crypto-taxes">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={taxes} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Tax guide
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              Understanding your 2021 crypto taxes
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Not sure if you owe taxes on your crypto? Learn how using crypto
                in 2021 can affect your U.S. taxes.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/essential-reading">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Essential} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Crypto resources
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What to read, watch, and stream
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Our guide to the best and smartest crypto articles, podcasts,
                and YouTube videos.
              </Text>
            </Heading>
          </Flex>
        </Link>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        spacing={20}
        mt="3rem"
        pb="4rem"
        borderBottom="1px solid var(--cds-colors-chakra-border-color)"
      >
        <Link to="/home/learn/7-biggest-bitcoin-myths">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={debunking} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Beginner's Guide
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              7 biggest Bitcoin myths
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Look at some of the biggest myths and misconceptions people tend
                to have about the world’s...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/crypto-slang-guide">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Group_31612615} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1} id="Glossary">
              Glossary
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang,
              explained
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                From diamond hands to the flippening, we break down 11 of the
                most popular pieces of crypt...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-lightning">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={lightningnetwork} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Beginner's Guide
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is the Lightning Network?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                A beginner’s guide to the “layer 2” technology that’s making
                bitcoin payments faster and c...
              </Text>
            </Heading>
          </Flex>
        </Link>
      </SimpleGrid>
      <Text as="b" fontSize="3rem" w="full" textAlign="center" pt="3rem">
        Glossary
      </Text>
      <Text w="full" color="#5b616e" textAlign="center">
        Expand your crypto vocabulary
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
        spacing={20}
        mt="3rem"
      >
        <Link to="/home/learn/what-is-cefi">
          <Flex flexDir="column" w="full">
            <Flex sx={styles.CoverImgC}>
              <Image src={Cefi} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is CeFi?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Learn how to earn interest on your savings or take out a loan
                using crypto as collateral
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-defi">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Defi} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is DeFi?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                DeFi is short for decentralized finance, an umbrella term for
                peer-to-peer financial servi...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-mining">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Mining} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is mining?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Mining is the process that Bitcoin and several other
                cryptocurrencies use to mint new coin...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-a-token">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Token} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is a token?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Technically, “token” is just another word for “cryptocurrency”
                or “cryptoasset.” But incre...
              </Text>
            </Heading>
          </Flex>
        </Link>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        spacing={20}
        mt="3rem"
      >
        <Link to="/home/learn/what-is-a-smart-contract">
          <Flex flexDir="column" w="full">
            <Flex sx={styles.CoverImgC}>
              <Image src={SmartContract} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is a smart contract?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Smart contracts allow developers to build apps that take
                advantage of blockchain security,...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-a-seed-phrase">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={seedphrase} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is a recovery phrase?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                A recovery phrase is a series of words generated by your
                cryptocurrency wallet that give y...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-a-private-key">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Key} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is a private key?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                A private key is like a password that allows you to access and
                manage your crypto funds.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-cryptography">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Cryptography} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is cryptography?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Cryptography is the study and practice of sending secure and
                encrypted messages between tw...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-a-stablecoin">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Stablecoin} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is a stablecoin?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                A stablecoin is a digital currency that is pegged to a “stable”
                reserve asset like the U.S...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-proof-of-work-or-proof-of-stake">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={image} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is "proof of work" or "proof of stake"?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                “Proof of work” and “proof of stake” are the two major consensus
                mechanisms cryptocurrenci...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-a-protocol">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Protocol} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is a protocol?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Protocols are basic sets of rules that establish the structure
                of a blockchain and allow d...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-market-cap">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Marketcap} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is market cap?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Market capitalization is the total value of all the coins that
                have been mined.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-are-technical-analysis-and-fundamental-analysis">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Technical} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is technical analysis?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Technical analysis looks at patterns in market data to identify
                trends. Fundamental analys...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-volatility">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Volatility} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is volatility?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Volatility is a measure of how much the price of an asset has
                moved up or down over time.
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-a-bull-or-bear-market">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={bullbear} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is a bull or bear market?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Markets experiencing sustained and/or substantial growth are
                called bull markets. Markets...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-a-fork">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Fork} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is a fork?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                A fork happens whenever a community makes a change to the
                blockchain’s protocol, or basic...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-inflation">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={Inflation} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is inflation?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                Inflation is the process by which a currency like the dollar or
                Euro loses value over time...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-internet-computer">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={icp} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is Internet Computer (ICP)?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                The Internet Computer is creating a decentralized internet —
                with independent data centers...
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-polkadot">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={polkadot} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is Polkadot (DOT)?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                A beginner's guide to the Polkadot protocol
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-polygon">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={polygon} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is Polygon (MATIC)?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                A beginner's guide to the Polygon network
              </Text>
            </Heading>
          </Flex>
        </Link>
        <Link to="/home/learn/what-is-uniswap">
          <Flex flexDir="column">
            <Flex sx={styles.CoverImgC}>
              <Image src={uniswap} w="full" sx={styles.CoverImg} />
            </Flex>
            <Text pt={3} pb={1}>
              Key term
            </Text>
            <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.6rem">
              What is Uniswap?
            </Text>
            <Heading noOfLines={3}>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.3rem">
                A beginner’s guide to the biggest DEX on Ethereum
              </Text>
            </Heading>
          </Flex>
        </Link>
      </SimpleGrid>
    </Flex>
  );
};
