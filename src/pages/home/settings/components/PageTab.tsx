import {
  CheckCircleIcon,
  RepeatClockIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import MyVericon from "../../../../assets/images/VerifyIconSvg.svg";
import MyEmailiconSvg from "../../../../assets/images/emailicon.svg";
import MyPersonalinfoicon from "../../../../assets/images/personalinfoicon.svg";
import { MyCard, useMyState } from "../../../../common";

const items = [
  {
    title: <FormattedMessage id="veryfi.title.1" />,
    des: <FormattedMessage id="veryfi.des.1" />,
    icon: <Image src={MyEmailiconSvg} boxSize="40px" />,
    url: "/home/settings/email",
  },
  {
    title: <FormattedMessage id="veryfi.title.2" />,
    des: <FormattedMessage id="veryfi.des.2" />,
    icon: <Image src={MyPersonalinfoicon} boxSize="40px" />,
    url: "/home/settings/info",
  },
  {
    title: <FormattedMessage id="veryfi.title.3" />,
    des: <FormattedMessage id="veryfi.des.3" />,
    icon: <Image src={MyVericon} boxSize="40px" />,
    url: "/home/settings/identity",
  },
];
const styles = {
  TabActive: {
    border: "1px solid #0052ff !important",
    backgroundColor: "#aba6ff12 !important",
  },

  Tabdefault: {
    border: "1px solid #dedfe2",
  },

  Factives: {
    border: "1px solid red !important",
    // backgroundColor: "#fffcfc !important",
  },

  Oactives: {
    border: "1px solid orange !important",
    // backgroundColor: "#fffdfb !important",
  },
};
const keys = [
  "email_verified_at",
  "profile_verified_at",
  "identity_verified_at",
];

export default ({ idx }: any) => {
  const { snap } = useMyState();
  const userInfo = snap.session.user;
  const IconType: any = {
    Failed: {
      icon: <Icon as={WarningIcon} color="red" />,
      textColor: "red",
      titleColor: "red",
      className: styles.Factives,
      title: "Failed",
      toobg: "red.500",
    },
    Waiting: {
      icon: <Icon as={RepeatClockIcon} color="orange" />,
      textColor: "orange",
      titleColor: "orange",
      className: styles.Oactives,
      title: "Waiting",
      toobg: "orange.500",
    },
    OK: {
      icon: <Icon as={CheckCircleIcon} color="#0052ff" />,
      textColor: "#999",
      titleColor: "#0052ff",
      className: styles.TabActive,
      title: "Verified",
      toobg: useColorModeValue("gray.900", "#fff"),
    },
    NotVerified: {
      icon: <Icon as={CheckCircleIcon} color="#dedfe2" />,
      textColor: "#999",
      titleColor: "#999",
      className: styles.TabActive,
      title: "NotVerified",
      toobg: useColorModeValue("gray.900", "#fff"),
    },
  };
  const newItems = items.map((item, index) => {
    let data = {};
    if (keys[index] == "email_verified_at") {
      data = {
        message: 1,
        status: userInfo?.[keys[index]] ? "OK" : "NotVerified",
        verified: userInfo?.[keys[index]] ? true : false,
      };
    }
    if (keys[index] == "profile_verified_at") {
      data = {
        message: userInfo?.["profile_error_message"],
        status:
          userInfo?.["profile_status"] == "Default" ||
          !userInfo?.["profile_status"]
            ? "NotVerified"
            : userInfo?.["profile_status"],
        verified: userInfo?.[keys[index]] ? true : false,
      };
    }
    if (keys[index] == "identity_verified_at") {
      data = {
        message: userInfo?.["identity_error_message"],
        status:
          userInfo?.["identity_status"] == "Default" ||
          !userInfo?.["identity_status"]
            ? "NotVerified"
            : userInfo?.["identity_status"],
        verified: userInfo?.[keys[index]] ? true : false,
      };
    }
    return {
      ...item,
      ...data,
    };
  });
  useEffect(() => {
    console.log(userInfo, "userInfo");
  }, [userInfo]);

  return (
    <Flex
      alignItems="center"
      w="full"
      px={3}
      gap={6}
      justifyContent="center"
      py={9}
      flexWrap="wrap"
    >
      {newItems.map((res: any, index: number) => {
        return (
          <Flex
            w={{ base: "100%", sm: "100%", md: "270px", lg: "270px" }}
            key={`set_tab_${index}`}
          >
            <Tooltip
              hasArrow
              bg={IconType[res?.status]?.toobg}
              label={
                res?.status == "Failed" ? (
                  <FormattedMessage id={`veryfi.error.${res.message}`} />
                ) : (
                  res.des
                )
              }
            >
              <Link to={res.url} style={{ width: "100%" }}>
                <MyCard
                  p={4}
                  sx={
                    index == idx
                      ? IconType[res?.status]?.className
                      : styles.Tabdefault
                  }
                >
                  <Flex w="50px">{res.icon}</Flex>
                  <Flex pl={2} flexDir="column" flex="1">
                    <Text
                      fontSize="1.1rem"
                      fontWeight="var(--cds-fontWeights-medium)"
                    >
                      {res.title}
                    </Text>
                    <Heading
                      color={IconType[res?.status]?.textColor}
                      fontSize="0.8rem"
                      fontWeight="450"
                      lineHeight="1.1rem"
                      my={2}
                      noOfLines={2}
                    >
                      <Text>
                        {res?.status == "Failed" ? (
                          <FormattedMessage
                            id={`veryfi.error.${res.message}`}
                          />
                        ) : (
                          res.des
                        )}
                      </Text>
                    </Heading>
                    <Flex alignItems="center">
                      {IconType[res?.status]?.icon}
                      <Text
                        color={IconType[res?.status]?.titleColor}
                        fontWeight="var(--cds-fontWeights-medium)"
                        fontSize="14px"
                        pl={2}
                      >
                        <FormattedMessage
                          id={`settings.${IconType[res?.status]?.title}`}
                        />
                      </Text>
                    </Flex>
                  </Flex>
                </MyCard>
              </Link>
            </Tooltip>
          </Flex>
        );
      })}
    </Flex>
  );
};
