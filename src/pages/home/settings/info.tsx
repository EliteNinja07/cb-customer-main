import {
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import {
  MyCard,
  MyContent,
  PrimaryButton,
  TextCardHeader,
  request,
  stateActions,
  useMyState,
  useMyToast,
} from '../../../common';
import PInput from './components/Input';
import MyMore from './components/More';
import PageTab from './components/PageTab';
import TTextarea from './components/Textarea';
import IUploadAvatar from './components/UploadAvatar';

import { FormattedMessage, useIntl } from 'react-intl';

const styles = {
  SettingsLC: {
    width: { base: '100%', sm: '100%', md: '100%', lg: 'calc(100% - 374px)' },
  },
};

export default () => {
  const { showRes } = useMyToast();
  const { snap } = useMyState();
  const intl = useIntl();
  const userInfo = snap.session.user;
  return (
    <MyContent>
      <Flex w='full' flexWrap='wrap'>
        <Flex sx={styles.SettingsLC}>
          <MyCard flexDir='column' alignItems='center'>
            <TextCardHeader w='full'>
              <FormattedMessage id='text.IdentityVerification' />
            </TextCardHeader>
            <Divider />
            <PageTab idx={1} />
            <Divider />
            {snap.session.user?.id ? (
              <Flex
                w={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
                maxWidth='600px'
                flexDir='column'
                px={{ base: 5, sm: 5, md: 5, lg: 0 }}
                py={16}
              >
                <Formik
                  initialValues={{
                    avatar: snap.session.user.avatar,
                    nickname: snap.session.user.nickname ?? '',
                    bio: snap.session.user.bio ?? '',
                    phone_number: snap.session.user.phone_number ?? '',
                    facebook: snap.session.user.facebook ?? '',
                    telegram: snap.session.user.telegram ?? '',
                    wechat: snap.session.user.wechat ?? '',
                    skype: snap.session.user.skype ?? '',
                    whatsapp: snap.session.user.whatsapp ?? '',
                    line: snap.session.user.line ?? '',
                    zalo: snap.session.user.zalo ?? '',
                  }}
                  onSubmit={(values, actions) => {
                    console.log('values', actions, values);
                    request('auth/update_profile', { data: values })
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
                      <Field name='avatar'>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired={snap.session.user.avatar ? false : true}
                            h='140px'
                            isInvalid={
                              form.errors.avatar && form.touched.avatar
                            }
                          >
                            <FormLabel fontSize='14px'>
                              <FormattedMessage id='text.Avatar' />
                            </FormLabel>
                            <IUploadAvatar
                              name='avatar'
                              defaultVal={snap.session.user.avatar}
                              onChange={(e: any) => {
                                if (e) {
                                  props.setFieldValue('avatar', e);
                                }
                              }}
                            />
                            <FormErrorMessage>
                              {form.errors.avatar}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name='nickname'>
                        {({ field, form }: any) => (
                          <FormControl
                            isRequired
                            h='115px'
                            isInvalid={
                              form.errors.nickname && form.touched.nickname
                            }
                          >
                            <FormLabel fontSize='14px'>
                              <FormattedMessage id='text.Nickname' />
                            </FormLabel>
                            <PInput
                              name='nickname'
                              onChange={field.onChange}
                              isDisabled={userInfo?.['profile_status'] == 'OK'}
                              placeholder={intl.formatMessage({
                                id: 'text.Nickname',
                              })}
                              {...field}
                            />
                            <FormErrorMessage>
                              {form.errors.nickname}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name='bio'>
                        {({ field, form }: any) => (
                          <FormControl
                            h='140px'
                            isInvalid={form.errors.name && form.touched.name}
                          >
                            <FormLabel fontSize='14px'>
                              <FormattedMessage id='text.Bio' />
                            </FormLabel>
                            <TTextarea
                              name='bio'
                              placeholder={intl.formatMessage({
                                id: 'text.Bio',
                              })}
                              onChange={field.onChange}
                              {...field}
                            />
                            <FormErrorMessage>
                              {form.errors.name}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Flex gap={6}>
                        <Field name='phone_number'>
                          {({ field, form }: any) => (
                            <FormControl
                              isRequired
                              h='110px'
                              isInvalid={form.errors.name && form.touched.name}
                            >
                              <FormLabel fontSize='14px'>
                                <FormattedMessage id='text.PhoneNumber' />
                              </FormLabel>
                              <PInput
                                name='phone_number'
                                placeholder={intl.formatMessage({
                                  id: 'text.PhoneNumber',
                                })}
                                isDisabled={
                                  userInfo?.['profile_status'] == 'OK'
                                }
                                onChange={field.onChange}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name='facebook'>
                          {({ field, form }: any) => (
                            <FormControl
                              h='110px'
                              isInvalid={form.errors.name && form.touched.name}
                            >
                              <FormLabel fontSize='14px'>
                                <FormattedMessage id='text.Facebook' />
                              </FormLabel>
                              <PInput
                                name='facebook'
                                onChange={field.onChange}
                                placeholder={intl.formatMessage({
                                  id: 'text.Facebook',
                                })}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </Flex>
                      <Flex gap={6}>
                        <Field name='telegram'>
                          {({ field, form }: any) => (
                            <FormControl
                              h='110px'
                              isInvalid={form.errors.name && form.touched.name}
                            >
                              <FormLabel fontSize='14px'>
                                {/* <FormattedMessage id="text.Telegram" /> */}
                                Telegram
                              </FormLabel>
                              <PInput
                                name='telegram'
                                onChange={field.onChange}
                                placeholder={intl.formatMessage({
                                  id: 'text.Telegram',
                                })}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name='wechat'>
                          {({ field, form }: any) => (
                            <FormControl
                              h='110px'
                              isInvalid={form.errors.name && form.touched.name}
                            >
                              <FormLabel fontSize='14px'>
                                <FormattedMessage id='text.Wechat' />
                              </FormLabel>
                              <PInput
                                name='wechat'
                                onChange={field.onChange}
                                placeholder={intl.formatMessage({
                                  id: 'text.Wechat',
                                })}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </Flex>

                      <Flex gap={6}>
                        <Field name='skype'>
                          {({ field, form }: any) => (
                            <FormControl
                              h='110px'
                              isInvalid={form.errors.name && form.touched.name}
                            >
                              <FormLabel fontSize='14px'>
                                {/* <FormattedMessage id="text.Skype" /> */}
                                Skype
                              </FormLabel>
                              <PInput
                                name='skype'
                                onChange={field.onChange}
                                placeholder={intl.formatMessage({
                                  id: 'text.Skype',
                                })}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name='whatsapp'>
                          {({ field, form }: any) => (
                            <FormControl
                              h='110px'
                              isInvalid={form.errors.name && form.touched.name}
                            >
                              <FormLabel fontSize='14px'>
                                {/* <FormattedMessage id="text.WhatsApp" /> */}
                                Whats app
                              </FormLabel>
                              <PInput
                                name='whatsapp'
                                onChange={field.onChange}
                                placeholder={intl.formatMessage({
                                  id: 'text.WhatsApp',
                                })}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </Flex>

                      <Flex gap={6}>
                        <Field name='line'>
                          {({ field, form }: any) => (
                            <FormControl
                              h='110px'
                              isInvalid={form.errors.name && form.touched.name}
                            >
                              <FormLabel fontSize='14px'>
                                {/* <FormattedMessage id="text.Line" /> */}
                                Line
                              </FormLabel>
                              <PInput
                                name='line'
                                onChange={field.onChange}
                                placeholder={intl.formatMessage({
                                  id: 'text.Line',
                                })}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name='zalo'>
                          {({ field, form }: any) => (
                            <FormControl
                              h='110px'
                              isInvalid={form.errors.name && form.touched.name}
                            >
                              <FormLabel fontSize='14px'>
                                {/* <FormattedMessage id="text.Zalo" /> */}
                                Zalo
                              </FormLabel>
                              <PInput
                                name='zalo'
                                onChange={field.onChange}
                                placeholder={intl.formatMessage({
                                  id: 'text.Zalo',
                                })}
                                {...field}
                              />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </Flex>

                      <Flex w='full' pt={5} key='submit'>
                        <PrimaryButton
                          isLoading={props.isSubmitting}
                          type='submit'
                        >
                          <FormattedMessage id='text.UpdateProfile' />
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
          mt={{ base: '24px', sm: '24px', md: '24px', lg: '0' }}
          ml={{ base: '0', sm: '0', md: '0', lg: '24px' }}
          w={{ base: '100%', sm: '100%', md: '100%', lg: '350px' }}
        >
          <MyMore />
        </Flex>
      </Flex>
    </MyContent>
  );
};
