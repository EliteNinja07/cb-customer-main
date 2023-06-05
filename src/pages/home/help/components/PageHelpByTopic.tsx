import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MycontactInfoSvg from "../../../../assets/images/help/contactInfo-1.svg";
import MyGettingstartIconSvg from "../../../../assets/images/help/gettingstarted.svg";
import MyNewUserChecklistBuyCrypto from "../../../../assets/images/help/newUserChecklistBuyCrypto.svg";
import PageCard from "./PageCard";
import MySafeSvg from "../../../../assets/images/help/safe.svg";
import MyOther from "../../../../assets/images/help/other.svg";
import MyTaxSeason from "../../../../assets/images/help/taxSeason.svg";
export default ({ icon, title }: any) => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 3, lg: 3 }}
      py={10}
      spacing={{ base: 10, sm: 10, md: 20, lg: 20 }}
      textAlign="center"
    >
      <Link to="/home/help/getting-started">
        <PageCard
          icon={MyGettingstartIconSvg}
          title="Getting started"
          des="Everything you need to start using Coinbase"
        />
      </Link>

      <Link to="/home/help/managing-my-account">
        <PageCard
          icon={MycontactInfoSvg}
          title="Managing my account"
          des="Manage your account, settings, and more"
        />
      </Link>

      <Link to="/home/help/trading-and-funding">
        <PageCard
          icon={MyNewUserChecklistBuyCrypto}
          title="Trading and funding "
          des="Buy, sell, convert, send, or receive crypto"
        />
      </Link>

      <Link to="/home/help/privacy-and-security">
        <PageCard
          icon={MySafeSvg}
          title="Privacy and security"
          des="Avoid scams and protect your account"
        />
      </Link>

      <Link to="/home/help/taxes-and-reports">
        <PageCard
          icon={MyTaxSeason}
          title="Taxes and reports"
          des="Understanding crypto taxes and reports"
        />
      </Link>

      <Link to="/home/help/other-topics">
        <PageCard
          icon={MyOther}
          title="Other topics"
          des="Coinbase One and troubleshooting"
        />
      </Link>
    </SimpleGrid>
  );
};
