import {
  AddIcon,
  MinusIcon,
  SearchIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";

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
  return (
    <Flex sx={styles.helpSearchC}>
      <Flex w="100%" flexDir="column" margin="0 auto" px={5}>
        <Flex sx={styles.headSearch}>
          <Flex sx={styles.headIcon}>
            <SearchIcon />
          </Flex>
          <Flex flex="1" pr={4}>
            <Input variant="unstyled" placeholder="How can we help you?" />
          </Flex>
          <Flex sx={styles.headClone}>
            <SmallCloseIcon boxSize={6} />
          </Flex>
        </Flex>
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
                <BreadcrumbItem>
                  <BreadcrumbLink href="/home/help/getting-started">
                    Getting started
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="/home/help/create-a-coinbase-account">
                    Create a Coinbase account
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="3rem"
              py={3}
            >
              2-step verification troubleshooting
            </Text>
            <Alert
              status="info"
              bg="#8dacfb17"
              py={6}
              sx={{ borderRadius: "10px", border: "1px solid #5b616e33" }}
            >
              <Flex>
                {" "}
                <AlertIcon color="#1652f0" />
                <Text pl={3}>
                  <Text as="b" fontSize="1.1rem">
                    Try this first
                  </Text>
                  <Text fontSize="1.1rem" pt={6} pb={6}>
                    If you're having trouble completing 2-step verification to
                    sign in to your account, make sure your mobile device
                    software and Coinbase app are up to date. If you're using a
                    browser to sign in, make sure you're using the latest
                    version of Chrome. Clearing your cache and restarting your
                    browser can also help.
                  </Text>

                  <Text as="b" fontSize="1.1rem" pt={6}>
                    Lost email access?
                  </Text>

                  <Text fontSize="1.1rem" pt={6} pb={6}>
                    If you've lost access to the email address associated with
                    your Coinbase account, locked yourself out of your account,
                    or lost access to your account, please start
                    <Link color="#1652f0" href="#">
                      here
                    </Link>
                    .
                  </Text>

                  <Text as="b" fontSize="1.1rem" pt={6}>
                    If you're using SMS verification
                  </Text>

                  <Text fontSize="1.1rem" pt={6}>
                    You'll need the mobile device and phone number associated
                    with your Coinbase account in hand in order to successfully
                    complete 2-step verification.
                  </Text>
                </Text>
              </Flex>
            </Alert>
            <Text fontSize="1.1rem" pt={6}>
              Coinbase offers 2-step verification, known also as 2-factor (2FA)
              or multifactor authentication, as an added security layer in
              addition to your username and password.
            </Text>

            <Text fontSize="1.1rem" pt={6}>
              With 2-step verification enabled on your account, you'll need to
              provide a unique verification code sent to your phone in addition
              to your username and password.
            </Text>

            <Text as="b" fontSize="1.1rem" pt={6}>
              Some events that can trigger 2-step verification
            </Text>

            <Text as="ul" listStyleType="disc" fontSize="1.1rem" pt={6} pl={6}>
              <Text as="li" display="list-item">
                Sign-in attempt from an unrecognized device
              </Text>
              <Text as="li" display="list-item" pt={6}>
                Sign-in attempt from a unrecognized phone number
              </Text>
              <Text as="li" display="list-item" pt={6}>
                Sending crypto out of your Coinbase account
              </Text>
            </Text>

            <Text fontSize="1.1rem" pt={6} pb={12}>
              Learn about the various
              <Link color="#1652f0" href="#">
                types of 2-step verification
              </Link>
              .
            </Text>

            <Flex>
              {" "}
              <Accordion w="100%" allowMultiple>
                {" "}
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      {" "}
                      <h1>
                        {" "}
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          {" "}
                          <Box
                            flex="1"
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>I'm not receiving the SMS (text) codes</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>{" "}
                      <AccordionPanel pb={4}>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            If you're using an
                            <Link color="#1652f0" href="#">
                              authenticator app
                            </Link>{" "}
                            (like Google or Duo), you won't get SMS codes sent
                            to your phone. Please use your authenticator app for
                            codes instead
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Due to issues with the SMS network itself, codes may
                            not get delivered to everyone. You may want to
                            instead use an authenticator app to complete this
                            step, since they don't require internet connectivity
                            or SMS coverage
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Your SMS inbox may be full. Try deleting some
                            messages from your inbox and request another code
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            After several requests to resend the SMS code, our
                            system may temporarily stop sending them as a
                            security measure. After 24 hours we'll resume
                            sending codes via SMS. If you've already waited 24
                            hours and still aren't receiving the codes, check
                            with your phone carrier to see if they're blocking
                            our SMS messages
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          fontSize="1.5rem"
                          id="#"
                        >
                          The SMS codes aren't working
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          You may be using TOTP authenticator rather than SMS
                          for verification. Check your
                          <Link color="#1652f0" href="#">
                            security settings
                          </Link>{" "}
                          to see. If you are using a TOTP authenticator, scroll
                          down to the TOTP authenticator section on this page
                          for further help.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          Additionally, you can choose the{" "}
                          <Text as="b">Try Another Way</Text> option. If you’re
                          using SMS as your primary 2FA, Coinbase Security
                          Prompt (Push Notification for 2FA) will be shown as an
                          alternative 2FA method if you have previously enabled
                          it on your account.
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          fontSize="1.5rem"
                          id="#"
                        >
                          I have a new phone number and still have my old number
                        </Text>

                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                          pb={6}
                        >
                          <Text as="li" display="list-item">
                            Sign in to your account with your username,
                            password, and 2-step verification code from your old
                            number
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Go to your
                            <Link color="#1652f0" href="#">
                              Security Settings
                            </Link>{" "}
                            page
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Verify your new phone number
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Set your new phone number as the Primary number
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            (optional) Delete your old number
                          </Text>
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          If you are using a NEW SIM card with your old number,
                          please follow instructions for{" "}
                          <Text as="b">
                            I have a new phone number and no longer have my old
                            number
                          </Text>{" "}
                          below instead.
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          fontSize="1.5rem"
                          id="#"
                        >
                          I have a new phone number and no longer have my old
                          number
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                          pb={6}
                        >
                          <Text as="li" display="list-item">
                            Sign in to your account with your username and
                            password
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            When prompted for a 2-step verification code, select{" "}
                            <Text as="b">Try another way</Text> {">"}{" "}
                            <Text as="b">Update your phone number</Text>
                          </Text>

                          <Text as="ul" fontSize="1.1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              <Text as="b">Note</Text>: If you do not get this
                              prompt after logging in, try logging in on an
                              incognito browser or clearing your cache and
                              trying again
                            </Text>
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            For security reasons, you'll be asked to provide:
                          </Text>

                          <Text as="ul" fontSize="1.1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              A photo of the front and back of your photo ID
                            </Text>
                            <Text as="li" display="list-item" pt={6}>
                              A webcam photo of yourself, taken at the time of
                              the prompt
                            </Text>
                          </Text>
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          Once you complete all the steps above, you should be
                          able to sign in to your account after 48-72 hours.
                          You’ll receive an email confirmation once the review
                          has been completed, then you can log in and update
                          your phone number in your account settings.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          Once account access has been restored, sends will be
                          disabled for 24 hours. After that period, you should
                          have full trading capabilities.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          If you log in while the review is still in progress,
                          you’ll be required to enter the PIN code you received
                          during the initial account recovery steps.
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>

            <Flex>
              {" "}
              <Accordion w="100%" allowMultiple>
                {" "}
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      {" "}
                      <h1>
                        {" "}
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          {" "}
                          <Box
                            flex="1"
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>Duo and Google Authenticator (TOTP)</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>{" "}
                      <AccordionPanel pb={4}>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          I want to use my new mobile device instead and still
                          have my old mobile device
                        </Text>

                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                          pb={6}
                        >
                          <Text as="li" display="list-item">
                            Sign in to your account with your username,
                            password, and 2-step verification code from your old
                            device (if your old device doesn't have internet
                            service, you'll need to connect to trusted wi-fi
                            network)
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Go to your
                            <Link color="#1652f0" href="#">
                              Security Settings
                            </Link>{" "}
                            page
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Regenerate your secret key (Note: regenerating your
                            secret key will invalidate your old device tokens)
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Scan the new secret key with your new Authenticator
                            device
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          I no longer have access to my old mobile device
                        </Text>
                        <Text fontSize="1.1rem" pt={6} pb={6}>
                          If you're using an authenticator app and no longer
                          have access to your old mobile device, but remember
                          the phone number associated with your account, you'll
                          need to first disable your authenticator app in order
                          to complete the account recovery process.
                        </Text>

                        <Text as="b" fontSize="1.1rem">
                          To disable your authenticator:
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          1. From a computer, sign in to Coinbase using your
                          email address and password.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          2. When prompted for a 2-step verification code,
                          select <Text as="b">Try another way</Text> {">"}{" "}
                          <Text as="b">Update your phone number</Text>
                        </Text>

                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            <Text as="b">Note</Text>: If you do not get this
                            prompt after logging in, try logging in on an
                            incognito browser or clearing your cache and trying
                            again
                          </Text>
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          3. Follow the rest of the instructions to complete an
                          Account Recovery.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          Please note that while the pictures of the front and
                          back of your ID can be uploaded from files, the photo
                          of your face will need to be taken live by webcam.
                          This process must be completed through the website and
                          cannot be completed using the mobile app.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          The account recovery process usually takes 48-72 hours
                          to complete, but can sometimes take longer. When the
                          recovery process has completed and your account has
                          been verified, you will receive an email confirmation
                          and should be able to log in to update your 2FA method
                          in your account settings.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          If you log in from a new device while the review is
                          still in progress, you’ll be required to enter the PIN
                          code you received during the initial account recovery
                          steps.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          Once account access has been restored, sends will be
                          disabled for 24 hours. After that period, you should
                          have full trading capabilities.
                        </Text>

                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          fontSize="1.5rem"
                          id="#"
                        >
                          My codes aren't working
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          Check that the clock on your device is set to the
                          correct timezone. An incorrect clock can cause codes
                          to be out of sync.
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>

            <Flex>
              {" "}
              <Accordion w="100%" allowMultiple>
                {" "}
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      {" "}
                      <h1>
                        {" "}
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          {" "}
                          <Box
                            flex="1"
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>Coinbase Security Prompt</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>{" "}
                      <AccordionPanel pb={4}>
                        <Text fontSize="1.1rem" pt={6}>
                          If you’re receiving the prompts but getting an error
                          message, you can select{" "}
                          <Text as="b">Try another way</Text> from the prompt to
                          receive a text message instead.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          If you’re not receiving the prompts on your mobile
                          device, kindly check the following:
                        </Text>

                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            If you're using an authenticator app (like Google or
                            Duo), you won't get Coinbase Security Prompt
                            notifications. You’ll either need to use your
                            authenticator app for codes, or switch to Coinbase
                            Security Prompt.
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Check your mobile device settings to make sure that
                            notifications are enabled for the Coinbase mobile
                            app (note that this is different from the
                            notification settings in your Coinbase mobile app).
                            Learn more about checking your device settings on
                            <Link color="#1652f0" href="#">
                              Android
                            </Link>{" "}
                            or
                            <Link color="#1652f0" href="#">
                              iOS
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Make sure you have a stable internet connection. A
                            poor connection can result in delayed or missed push
                            notifications. Try the following:
                          </Text>

                          <Text as="ul" fontSize="1.1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              Turn on/off your WiFi connection
                            </Text>
                            <Text as="li" display="list-item" pt={6}>
                              Try switching to mobile data
                            </Text>
                            <Text as="li" display="list-item" pt={6}>
                              Temporarily turn off your VPN/Proxy connection (if
                              applicable)
                            </Text>
                            <Text as="li" display="list-item" pt={6}>
                              Close any other apps to reduce bandwidth
                              allocation
                            </Text>
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Make sure you’re using the latest version of the
                            Coinbase mobile app (you can verify by checking the
                            app store for
                            <Link color="#1652f0" href="#">
                              iPhone
                            </Link>{" "}
                            or
                            <Link color="#1652f0" href="#">
                              Android
                            </Link>
                            .)
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Make sure you’re using the latest version of your
                            phone software (please be advised that the mobile
                            app may not work on a rooted/jailbroken phone).
                          </Text>
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          If you’re still having trouble receiving Coinbase
                          Security Prompt notifications after following the
                          above recommendations, please
                          <Link color="#1652f0" href="#">
                            contact us
                          </Link>{" "}
                          and provide a brief summary of the issue (a
                          screenshot/screen recording is recommended for us to
                          better troubleshoot the issue).
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>

            <Flex>
              {" "}
              <Accordion w="100%" allowMultiple>
                {" "}
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      {" "}
                      <h1>
                        {" "}
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          {" "}
                          <Box
                            flex="1"
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>Security keys</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>{" "}
                      <AccordionPanel pb={4}>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          My security key isn't working
                        </Text>

                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            Remove the key from the port and insert again. A
                            light should appear on the key
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Close and reopen your browser and then try again
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Clear your cache and cookies from your browser and
                            try again
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Check to make sure your key supports WebAuthN /
                            Fido2 standard. You can confirm with your key
                            manufacturer
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          I want to update my security key to a new key
                        </Text>

                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                          pb={6}
                        >
                          <Text as="li" display="list-item">
                            Sign in to your account with your username,
                            password, and 2-step verification code from your old
                            number
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Go to your
                            <Link color="#1652f0" href="#">
                              Security Settings
                            </Link>{" "}
                            page
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Select Manage next to the security key name
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Under your security key management window, select
                            remove for the key you would like to remove from
                            your account
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Select the 2-step verification method to replace the
                            security key
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          I lost or broke my security key
                        </Text>

                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                          pb={6}
                        >
                          <Text as="li" display="list-item">
                            Sign in to your account with your username and
                            password
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            When prompted for your security key authentication,
                            select{" "}
                            <Text as="b">
                              Try another way {"> "}Update your security key
                            </Text>
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Follow the remaining instructions
                          </Text>
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          The account recovery process usually takes 48-72 hours
                          to complete, but can sometimes take longer. When the
                          recovery process has completed and your account has
                          been verified, you will receive an email confirmation
                          and should be able to log in to update your 2FA method
                          in your account settings.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          If you log in while the review is still in progress,
                          you’ll be required to enter the PIN code you received
                          during the initial account recovery steps.
                        </Text>

                        <Text fontSize="1.1rem" pt={6}>
                          Once account access has been restored, sends will be
                          disabled for 24 hours. After that period, you should
                          have full trading capabilities.
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          How do I remove a security key?
                        </Text>

                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                          pb={6}
                        >
                          <Text as="li" display="list-item">
                            Go to your
                            <Link color="#1652f0" href="#">
                              Security Settings
                            </Link>{" "}
                            page
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Select Manage, then select Remove (all security keys
                            linked to your account will be removed)
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            Set up another 2-step verification method
                          </Text>
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          ></Flex>
        </Flex>
      </Flex>
      <PageHelpful />
      <GettingFooter />
    </Flex>
  );
};
