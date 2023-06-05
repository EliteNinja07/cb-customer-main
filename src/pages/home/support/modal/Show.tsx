import {
  Avatar,
  Divider,
  Flex,
  Image,
  FormControl,
  FormErrorMessage,
  Tag,
  Text,
  Textarea,
  useColorMode,
} from '@chakra-ui/react';
import {
  PrimaryButton,
  formatVip,
  getAvatar,
  getDayYmHm,
  request,
  useChakraTheme,
  useMyState,
  useMyToast,
} from '../../../../common';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import MyCoinbaseIconSvg from '../../../../assets/images/coinbase-icon.svg';
import MDEditor from '@uiw/react-md-editor';

const styles = {
  SettingsLC: {
    width: { base: '100%', sm: '100%', md: '100%', lg: 'calc(100% - 374px)' },
  },
  Items: {
    width: '100%',
    fontSize: '1.1rem',
    borderBottom: '1px solid #98989829',
    marginBottom: '1rem',
    paddingBottom: '1rem',
  },
  items_time: {
    paddingTop: '10px',
    fontSize: '0.8rem',
    color: '#999',
    width: '100%',
    textAlign: 'right',
  },
  case_str_user: {
    backgroundColor: '#f8f8f8',
    padding: '1rem 0.8rem',
    borderRadius: '10px',
    marginBottom: '2rem',
    _dark: {
      backgroundColor: '#000',
    },
  },
  AvatarInfo: {
    position: 'relative',
    justifyContent: 'center',
  },
  vipInfo: {
    justifyContent: 'center',
    width: 'full',
    marginTop: '5px',
    position: 'relative',
    zIndex: '10',
  },
};
export const Show = ({ params, onChange }: any) => {
  const { showRes } = useMyToast();
  const { snap } = useMyState();
  const intl = useIntl();
  const [getSupport, setSupport] = useState<any>({});
  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = 'Required!';
    }
    return error;
  };
  const { colorMode } = useColorMode();

  useEffect(() => {
    request('cases/show', { data: params })
      .then((res: any) => {
        setSupport(res.data);
      })
      .catch(showRes);
  }, []);

  console.log(snap.session.user, 'snap');

  return (
    <Flex w='full' flexDir='column'>
      <Flex sx={styles.case_str_user}>
        <Flex sx={styles.AvatarInfo} flexDir='column'>
          <Flex justifyContent='center'>
            <Avatar size='md' src={getAvatar(snap.session.user?.avatar)} />
          </Flex>
          <Flex sx={styles.vipInfo}>
            <Tag size='sm' colorScheme='messenger'>
              {formatVip(snap.session.user?.vips_id)}
            </Tag>
          </Flex>
          <Text textAlign={'center'} width={'full'}>
            {snap.session.user?.nickname ?? '-'}
          </Text>
        </Flex>
        <Flex flexDir='column' ml={3} flex='1'>
          <Text as='b' fontSize='1.1rem'>
            {getSupport.subject ? (
              <FormattedMessage id={`text.` + getSupport.subject} />
            ) : (
              <></>
            )}
          </Text>
          <Flex fontSize='1rem' whiteSpace={'pre-wrap'} pt={1} pb={3}>
            {getSupport.content}
          </Flex>
          <Text w='full' color={'#666'} textAlign={'right'} fontSize={'0.7rem'}>
            {getDayYmHm(getSupport.created_at)}
          </Text>
        </Flex>
      </Flex>
      <Divider />
      <Flex pb={5} mt={4} flexDir='column'>
        {getSupport?.case_details?.map((res: any, index: number) => {
          return (
            <Flex sx={styles.Items} flexDir='column' key={`case_list_${index}`}>
              <Flex justifyContent={'space-between'}>
                <Flex flexDirection={'column'} w={'full'}>
                  <Flex
                    alignItems={'center'}
                    mb={2}
                    background='#c3c3c336'
                    px={4}
                    py={2}
                    borderRadius='10px'
                    justifyContent='space-between'
                    minWidth='21rem'
                  >
                    {!res?.users_id && (
                      <Flex>
                        <Image
                          src={MyCoinbaseIconSvg}
                          marginRight={2}
                          alt='Coinbase Logo'
                          w={{
                            base: '18px',
                            sm: '18px',
                            md: '18px',
                            lg: '18px',
                          }}
                        />
                        <Text fontSize='1rem'>AI Trade Team</Text>
                      </Flex>
                    )}

                    {res?.users_id && (
                      <Flex>
                        <Avatar
                          size='xs'
                          mr={2}
                          src={getAvatar(snap.session.user?.avatar)}
                        />
                        <Text
                          w={['6rem', '6rem', '12rem', '16rem']}
                          isTruncated
                        >
                          {snap.session.user?.nickname ?? '-'}
                        </Text>
                      </Flex>
                    )}
                    <Flex>
                      <Text sx={styles.items_time}>
                        {getDayYmHm(res.created_at)}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex fontSize='1rem' whiteSpace={'pre-wrap'}>
                    <MDEditor.Markdown
                      source={res.answer}
                      wrapperElement={{
                        'data-color-mode': colorMode,
                      }}
                      style={{ whiteSpace: 'pre-wrap', background: 'inherit' }}
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Divider />
      <Formik
        initialValues={{
          content: '',
        }}
        onSubmit={(values, actions) => {
          request('cases/submit', { data: { ...{ id: params.id }, ...values } })
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
          <Form style={{ width: '100%' }}>
            <Field name='answer' validate={validateEmail} width='100%'>
              {({ field, form }: any) => (
                <FormControl
                  isRequired
                  h='110px'
                  isInvalid={form.errors.answer && form.touched.answer}
                >
                  {/* <FormLabel fontSize="14px">still has question?</FormLabel> */}
                  <Textarea
                    {...field}
                    placeholder={intl.formatMessage({
                      id: 'support.answer.placeholder',
                    })}
                  />
                  <FormErrorMessage>{form.errors.answer}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex w='full' mt={5} pb={6}>
              <PrimaryButton type='submit' isLoading={props.isSubmitting}>
                <FormattedMessage id='text.Send' />
              </PrimaryButton>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
