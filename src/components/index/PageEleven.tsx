import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { MyContent } from "../../common";

export default function PageEleven() {
  return (
    <MyContent w={{ base: "100%", sm: "100%", md: "1270px", lg: "1270px" }}>
      <Flex flexDir="column" py={6} p="0 1rem">
        <Text
          fontWeight="var(--cds-fontWeights-medium)"
          fontSize={{ base: "1.8rem", sm: "1.8rem", md: "2rem", lg: "2rem" }}
          textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
          pt={8}
        >
          <FormattedMessage id="home.eleven.1" />
        </Text>
        <Flex pt="2rem" w="full">
          <Accordion w="100%" allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={5}
                    px={0}
                    sx={{ _hover: { bg: "none" } }}
                  >
                    <Flex flex="1" textAlign="left">
                      <Text
                        fontSize={{
                          base: "1.2rem",
                          sm: "1.2rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        }}
                        fontWeight="405"
                      >
                        <FormattedMessage id="home.eleven.2" />
                      </Text>
                    </Flex>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.3" />
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={5}
                    px={0}
                    sx={{ _hover: { bg: "none" } }}
                  >
                    <Flex flex="1" textAlign="left">
                      <Text
                        fontSize={{
                          base: "1.2rem",
                          sm: "1.2rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        }}
                        fontWeight="405"
                      >
                        <FormattedMessage id="home.eleven.4" />
                      </Text>
                    </Flex>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.5" />
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={5}
                    px={0}
                    sx={{ _hover: { bg: "none" } }}
                  >
                    <Flex flex="1" textAlign="left">
                      <Text
                        fontSize={{
                          base: "1.2rem",
                          sm: "1.2rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        }}
                        fontWeight="405"
                      >
                        <FormattedMessage id="home.eleven.6" />
                      </Text>
                    </Flex>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.7" />
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={5}
                    px={0}
                    sx={{ _hover: { bg: "none" } }}
                  >
                    <Flex flex="1" textAlign="left">
                      <Text
                        fontSize={{
                          base: "1.2rem",
                          sm: "1.2rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        }}
                        fontWeight="405"
                      >
                        <FormattedMessage id="home.eleven.8" />
                      </Text>
                    </Flex>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.9" />
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={5}
                    px={0}
                    sx={{ _hover: { bg: "none" } }}
                  >
                    <Flex flex="1" textAlign="left">
                      <Text
                        fontSize={{
                          base: "1.2rem",
                          sm: "1.2rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        }}
                        fontWeight="405"
                      >
                        <FormattedMessage id="home.eleven.10" />
                      </Text>
                    </Flex>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.11" />
                    </Text>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.12" />
                    </Text>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.13" />
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={5}
                    px={0}
                    sx={{ _hover: { bg: "none" } }}
                  >
                    <Flex flex="1" textAlign="left">
                      <Text
                        fontSize={{
                          base: "1.2rem",
                          sm: "1.2rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        }}
                        fontWeight="405"
                      >
                        <FormattedMessage id="home.eleven.14" />
                      </Text>
                    </Flex>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.15" />
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={5}
                    px={0}
                    sx={{ _hover: { bg: "none" } }}
                  >
                    <Flex flex="1" textAlign="left">
                      <Text
                        fontSize={{
                          base: "1.2rem",
                          sm: "1.2rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        }}
                        fontWeight="405"
                      >
                        <FormattedMessage id="home.eleven.16" />
                      </Text>
                    </Flex>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.17" />
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={5}
                    px={0}
                    sx={{ _hover: { bg: "none" } }}
                  >
                    <Flex flex="1" textAlign="left">
                      <Text
                        fontSize={{
                          base: "1.2rem",
                          sm: "1.2rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        }}
                        fontWeight="405"
                      >
                        <FormattedMessage id="home.eleven.18" />
                      </Text>
                    </Flex>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="#777">
                      <FormattedMessage
                        id="home.eleven.19"
                        values={{ name: "Ai Trade" }}
                      />
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={5}
                    px={0}
                    sx={{ _hover: { bg: "none" } }}
                  >
                    <Flex flex="1" textAlign="left">
                      <Text
                        fontSize={{
                          base: "1.2rem",
                          sm: "1.2rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        }}
                        fontWeight="405"
                      >
                        <FormattedMessage id="home.eleven.20" />
                      </Text>
                    </Flex>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.21" />
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={5}
                    px={0}
                    sx={{ _hover: { bg: "none" } }}
                  >
                    <Flex flex="1" textAlign="left">
                      <Text
                        fontSize={{
                          base: "1.2rem",
                          sm: "1.2rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        }}
                        fontWeight="405"
                      >
                        <FormattedMessage id="home.eleven.22" />
                      </Text>
                    </Flex>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="#777">
                      <FormattedMessage id="home.eleven.23" />
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </MyContent>
  );
}
