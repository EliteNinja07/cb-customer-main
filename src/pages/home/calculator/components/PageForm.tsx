import { PrimaryButton } from "../../../../common";
import { Flex, FormControl, FormLabel, SimpleGrid } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { FormattedMessage, useIntl } from "react-intl";
import PInput from "./Input";
import MSelect from "./MSelect";
import VipSelect from "./VipSelect";

let LevelList = [
  { label: "1x", value: 1 },
  { label: "5x", value: 5 },
  { label: "10x", value: 10 },
  { label: "20x", value: 20 },
  { label: "40x", value: 40 },
  { label: "60x", value: 60 },
  { label: "80x", value: 80 },
  { label: "100x", value: 100 },
  { label: "120x", value: 120 },
  { label: "125x", value: 125 },
];
let ApyList = [
  { label: "5%", value: 5 },
  { label: "10%", value: 10 },
  // { label: "20%", value: 20 },
  // { label: "30%", value: 30 },
  // { label: "40%", value: 40 },
  // { label: "50%", value: 50 },
  // { label: "60%", value: 60 },
  // { label: "70%", value: 70 },
  // { label: "80%", value: 80 },
  // { label: "90%", value: 90 },
  // { label: "100%", value: 100 },
  // { label: "200%", value: 200 },
];

let DayList = [
  { label: "3", value: 3 },
  { label: "7", value: 7 },
  { label: "15", value: 15 },
  { label: "30", value: 30 },
  { label: "60", value: 60 },
  { label: "90", value: 90 },
  { label: "180", value: 180 },
  { label: "360", value: 360 },
];

export default ({ onChange }: any) => {
  const intl = useIntl();

  let InterestList = [
    { label: intl.formatMessage({ id: "text.CompoundInterest" }), value: 1 },
    { label: intl.formatMessage({ id: "text.SimpleInterest" }), value: 2 },
  ];

  return (
    <Flex px={6} py={4}>
      <Formik
        initialValues={{
          vip: "",
          staking: "",
          apy: "",
          level: "",
          days: "",
          interestType: "",
        }}
        onSubmit={(values) => onChange(values)}
      >
        {(props) => (
          <Form>
            <SimpleGrid
              spacing={6}
              columns={{ base: 1, sm: 1, md: 4, lg: 7 }}
              alignItems="flex-end"
            >
              <Field name="vip">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel color="#89909e" fontSize="14px" py={0} my={1}>
                      <FormattedMessage id="text.Vip" />
                    </FormLabel>
                    <VipSelect
                      placeholder={<FormattedMessage id="text.Vip" />}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="staking">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel color="#89909e" fontSize="14px" py={0} my={1}>
                      <FormattedMessage id="text.Staking" />
                    </FormLabel>
                    <PInput
                      placeholder={intl.formatMessage({ id: "text.Staking" })}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="apy">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel color="#89909e" fontSize="14px" py={0} my={1}>
                      <FormattedMessage id="text.APY" />
                    </FormLabel>
                    <MSelect
                      option={ApyList}
                      placeholder={<FormattedMessage id="text.APY" />}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="level">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel color="#89909e" fontSize="14px" py={0} my={1}>
                      <FormattedMessage id="text.Leverage" />
                    </FormLabel>
                    <MSelect
                      option={LevelList}
                      placeholder={<FormattedMessage id="text.Leverage" />}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="days">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel color="#89909e" fontSize="14px" py={0} my={1}>
                      <FormattedMessage id="text.Days" />
                    </FormLabel>
                    <MSelect
                      option={DayList}
                      placeholder={<FormattedMessage id="text.Days" />}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="interestType">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel color="#89909e" fontSize="14px" py={0} my={1}>
                      <FormattedMessage id="text.InterestType" />
                    </FormLabel>
                    <MSelect
                      option={InterestList}
                      placeholder={<FormattedMessage id="text.InterestType" />}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <Flex>
                <PrimaryButton type="submit">
                  <FormattedMessage id="text.Calculation" />
                </PrimaryButton>
              </Flex>
            </SimpleGrid>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
