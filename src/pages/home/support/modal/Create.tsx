import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { FormattedMessage, useIntl } from "react-intl";
import { PrimaryButton, request, useMyToast } from "../../../../common";
import MySubSelect from "../../../../components/SubSelect";

const styles = {
  SettingsLC: {
    width: { base: "100%", sm: "100%", md: "100%", lg: "calc(100% - 374px)" },
  },
};
export const Create = ({ onChange }: any) => {
  const { showRes } = useMyToast();
  const intl = useIntl();
  const validateSubject = (value: string) => {
    let error;
    if (!value) {
      error = intl.formatMessage({ id: "error.case.1" });
    }
    return error;
  };

  const validateContent = (value: string) => {
    let error;
    if (!value) {
      error = intl.formatMessage({ id: "error.case.2" });
    }
    return error;
  };
  return (
    <Flex w="full">
      <Formik
        initialValues={{
          subject: "",
          content: "",
        }}
        onSubmit={(values, actions) => {
          request("cases/store", { data: values })
            .then((res: any) => {
              showRes(res);
              if (res.code == 0) {
                onChange();
              }
            })
            .catch(showRes)
            .finally(() => {
              actions.setSubmitting(false);
            });
        }}
      >
        {(props: any) => (
          <Form style={{ width: "100%" }}>
            <Field name="subject" validate={validateSubject} width="100%">
              {({ field, form }: any) => (
                <FormControl
                  isRequired
                  h="110px"
                  isInvalid={form.errors.subject && form.touched.subject}
                >
                  <FormLabel fontSize="14px">
                    <FormattedMessage id="text.Subject" />
                  </FormLabel>
                  {/* <Input {...field} placeholder="Subject" /> */}
                  <MySubSelect
                    {...field}
                    placeholder={intl.formatMessage({ id: "text.Subject" })}
                  />
                  <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="content" validate={validateContent} width="100%">
              {({ field, form }: any) => (
                <FormControl
                  isRequired
                  h="110px"
                  isInvalid={form.errors.content && form.touched.content}
                >
                  <FormLabel fontSize="14px">
                    <FormattedMessage id="text.Description" />
                  </FormLabel>
                  <Textarea
                    {...field}
                    placeholder={intl.formatMessage({ id: "text.Description" })}
                  />
                  <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex w="full" mt={9} pb={6}>
              <PrimaryButton type="submit" isLoading={props.isSubmitting}>
                <FormattedMessage id="text.SendCase" />
              </PrimaryButton>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
