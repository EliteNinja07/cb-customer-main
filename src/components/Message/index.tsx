import React from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { FormattedMessage, useIntl } from "react-intl";
import { PrimaryButton, request, useMyToast } from "../../common";
import MySubSelect from "../../components/SubSelect";

export default function index({ tdata, onClose }: any) {
  const { showRes } = useMyToast();
  const intl = useIntl();
  const validateContent = (value: string) => {
    let error;
    if (!value) {
      error = intl.formatMessage({ id: "error.send.1" });
    }
    return error;
  };

  return (
    <Flex w="full" pt={5}>
      <Formik
        initialValues={{
          content: "",
        }}
        onSubmit={(values, actions) => {
          console.log(tdata, "tdata");
          request("friends/send_message", {
            data: { ...values, ...{ users_id: tdata?.id || tdata?.users_id } },
          })
            .then((res: any) => {
              showRes(res);
              if (res.code == 0) {
                onClose?.();
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
            <Field name="content" validate={validateContent} width="100%">
              {({ field, form }: any) => (
                <FormControl
                  isRequired
                  h="110px"
                  isInvalid={form.errors.content && form.touched.content}
                >
                  {/* <FormLabel fontSize="14px">
                      <FormattedMessage id="text.Description" />
                    </FormLabel> */}
                  <Textarea
                    {...field}
                    placeholder={intl.formatMessage({ id: "send.des" })}
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
}
