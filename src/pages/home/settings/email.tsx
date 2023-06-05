import {
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { FormattedMessage, useIntl } from "react-intl";
import {
  MyCard,
  MyContent,
  PrimaryButton,
  request,
  stateActions,
  TextCardHeader,
  useMyState,
  useMyToast,
} from "../../../common";
import PInput from "./components/Input";
import PInputCode from "./components/InputCode";
import MyMore from "./components/More";
import PageTab from "./components/PageTab";

const styles = {
  SettingsLC: {
    width: { base: "100%", sm: "100%", md: "100%", lg: "calc(100% - 374px)" },
  },
};

export default () => {
  const { showRes } = useMyToast();
  const { snap } = useMyState();
  const intl = useIntl();

  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = intl.formatMessage({ id: "error.email" });
    }
    return error;
  };

  return (
    <MyContent w="100%">
      <Flex w="full" flexWrap="wrap">
        <Flex sx={styles.SettingsLC}>
          <MyCard flexDir="column" alignItems="center">
            <TextCardHeader w="full">
              <FormattedMessage id="home.sidebar.Settings/identity" />
            </TextCardHeader>
            <Divider />
            <PageTab idx={0} />
            <Divider />
            {snap.session.user?.id ? (
              <Flex
                w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                maxWidth="600px"
                flexDir="column"
                px={{ base: 5, sm: 5, md: 5, lg: 0 }}
                py={16}
              >
                <Formik
                  initialValues={{
                    email: snap.session.user?.email ?? "",
                    code: "",
                  }}
                  onSubmit={(values, actions) => {
                    request("auth/validate_email_code", { data: values })
                      .then((res) => {
                        showRes(res);
                        stateActions.me();
                      })
                      .catch(showRes)
                      .finally(() => {
                        actions.setSubmitting(false);
                      });
                  }}
                >
                  {(props: any) => (
                    <Form>
                      <Field name="email" validate={validateEmail}>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            h="110px"
                            isInvalid={form.errors.email && form.touched.email}
                          >
                            <FormLabel fontSize="14px">
                              <FormattedMessage id="text.EmailAddress" />
                            </FormLabel>
                            <PInput
                              {...field}
                              placeholder={intl.formatMessage({
                                id: "text.EmailAddress",
                              })}
                              type="email"
                            />
                            <FormErrorMessage>
                              {form.errors.email}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="code">
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            h="110px"
                            isInvalid={form.errors.name && form.touched.name}
                          >
                            <FormLabel fontSize="14px">
                              <FormattedMessage id="text.ValidateCode" />
                            </FormLabel>
                            <PInputCode
                              email={form.values.email}
                              {...field}
                              placeholder={intl.formatMessage({
                                id: "text.ValidateCode",
                              })}
                              type="number"
                            />
                            <FormErrorMessage>
                              {form.errors.name}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Flex w="full" pt={5}>
                        <PrimaryButton
                          type="submit"
                          isLoading={props.isSubmitting}
                        >
                          <FormattedMessage id="text.UpdateEmail" />
                        </PrimaryButton>
                      </Flex>
                    </Form>
                  )}
                </Formik>
              </Flex>
            ) : (
              <></>
            )}
          </MyCard>
        </Flex>
        <Flex
          mt={{ base: "24px", sm: "24px", md: "24px", lg: "0" }}
          ml={{ base: "0", sm: "0", md: "0", lg: "24px" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "350px" }}
        >
          <MyMore />
        </Flex>
      </Flex>
    </MyContent>
  );
};
