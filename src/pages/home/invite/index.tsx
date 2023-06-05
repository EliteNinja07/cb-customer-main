import { Flex, Image, Input, Text } from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

import MyInviteBSvg from "../../../assets/images/inviteBSvg.svg";
import {
  MyContent,
  MyIcon,
  PrimaryButton,
  request,
  stateActions,
  useMyState,
  useMyToast,
} from "../../../common";

const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
const styles = {
  InviteC: {
    height: {
      base: "100%",
      sm: "100%",
      md: "calc(100vh - 68px - 64px)",
      lg: "calc(100vh - 68px - 64px)",
    },
    width: "100%",
    backgroundColor: "#fff",
    _dark: {
      backgroundColor: "#000",
    },
  },
  InputStyle: {
    border: "1px solid rgba(91, 97, 110, 0.66)",
    height: "60px",
    borderRadius: "8px",
  },
  invite_l_c: {
    order: { base: 2, sm: 2, md: 2, lg: 1 },
  },
  invite_r_c: {
    order: { base: 1, sm: 1, md: 1, lg: 2 },
  },
};

export default () => {
  const { snap } = useMyState();
  const [shareLink, setShareLink] = useState("");
  const { showSuccess, showRes } = useMyToast();
  const [getEmail, setEmail] = useState("");
  const intl = useIntl();

  useEffect(() => {
    setShareLink(
      `https://www.coinbase.com.co?invite_code=${snap.session.user?.invite_code}`
    );
  }, [snap.session.user]);
  const onSubmit = () => {
    if (regEmail.test(getEmail)) {
      stateActions.addLoading();
      request("referrals/invite", { data: { email: getEmail } })
        .then((res: any) => {
          showRes(res);
          stateActions.subLoading();
          if (res.code == 0) {
            setEmail("");
          }
        })
        .catch(showRes);
    } else {
      stateActions.subLoading();
      showRes({ colode: 9, message: <FormattedMessage id="error.email" /> });
    }
  };

  const ViInputAmount = () => {
    //判断条件，是否可提交
    if (regEmail.test(getEmail)) {
      return { status: false };
    } else {
      return { status: true };
    }
  };
  return (
    <Flex sx={styles.InviteC} alignItems="center" justifyContent="center">
      <MyContent
        w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        px="0"
        py="0"
      >
        <Flex w="full" flexWrap="wrap">
          <Flex sx={styles.invite_l_c} flexDir="column" px={6} pb={6} flex="1">
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              py={{ base: "1rem", sm: "1rem", md: 0, lg: 0 }}
              w={{ base: "80%", sm: "80%", md: "100%", lg: "100%" }}
              sx={{
                lineHeight: {
                  base: "2rem",
                  sm: "2rem",
                  md: "2.1rem",
                  lg: "2.1rem",
                },
              }}
              fontSize={{
                base: "1.6rem",
                sm: "1.6rem",
                md: "2rem",
                lg: "2rem",
              }}
            >
              <FormattedMessage id="invite.label" />
            </Text>
            <Text
              pt={3}
              sx={{
                color: "#717886",
                fontSize: {
                  base: "0.9rem",
                  sm: "0.9rem",
                  md: "1.1rem",
                  lg: "1.1rem",
                },
              }}
            >
              <FormattedMessage id="invite.desc" />

              <Link to="/home/learn" style={{ color: "#0052ff" }}>
                <FormattedMessage id="text.LearnMore" />
              </Link>
            </Text>
            <Flex py={8} flexWrap="wrap">
              <Flex
                sx={styles.InputStyle}
                px={4}
                w={{ base: "100%", sm: "100%", md: "300px", lg: "300px" }}
              >
                <Input
                  variant="unstyled"
                  placeholder={intl.formatMessage({ id: "invite.formtext1" })}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                />
              </Flex>
              <Flex
                pl={{ base: 0, sm: 0, md: 5, lg: 5 }}
                mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
                w={{ base: "100%", sm: "100%", md: "auto", lg: "auto" }}
              >
                <PrimaryButton
                  h="55px"
                  margin="0 auto"
                  isDisabled={ViInputAmount().status}
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  <FormattedMessage id="text.SendInvite" />
                </PrimaryButton>
              </Flex>
            </Flex>
            <Text fontWeight="410" fontSize="18px">
              <FormattedMessage id="invite.share" />
            </Text>
            <Flex py={2} flexWrap="wrap">
              <Flex
                sx={styles.InputStyle}
                px={4}
                w={{ base: "100%", sm: "100%", md: "400px", lg: "400px" }}
                alignItems="center"
              >
                <Input
                  variant="unstyled"
                  defaultValue={shareLink}
                  placeholder={intl.formatMessage({ id: "invite.formtext1" })}
                />
                {/* <Flex>
                  <OutlineButton
                    onClick={() => {
                      copy(shareLink);
                      showSuccess({ title: <FormattedMessage id="coptBtn" /> });
                    }}
                  >
                    {lang?.copyLink}
                  </OutlineButton>
                </Flex> */}
              </Flex>
              <Flex
                pl={{ base: 0, sm: 0, md: 5, lg: 5 }}
                mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
                w={{ base: "100%", sm: "100%", md: "auto", lg: "auto" }}
              >
                <PrimaryButton
                  h="55px"
                  margin="0 auto"
                  onClick={() => {
                    copy(shareLink);
                    showSuccess({
                      title: <FormattedMessage id="text.Copied" />,
                    });
                  }}
                >
                  <MyIcon icon="" />
                  <FormattedMessage id="text.CopyLink" />
                </PrimaryButton>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            px={{ base: 0, sm: 0, md: 6, lg: 6 }}
            w={{ base: "100%", sm: "100%", md: "500px", lg: "500px" }}
            justifyContent="center"
            sx={styles.invite_r_c}
            py={{ base: "1rem", sm: "1rem", md: 0, lg: 0 }}
          >
            <Image src={MyInviteBSvg} />
          </Flex>
        </Flex>
      </MyContent>
    </Flex>
  );
};
