import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router';
import { useSetState } from 'react-use';
import {
  MyNewAlertProps,
  TextHeadLine,
  request,
  useMyToast,
} from '../../common';
import { stateActions } from '../../common/state';

export default function AiTradeCard({
  svg,
  title,
  subTitle,
  description,
  field,
  user,
  onModalClose,
  width = '200px',
  height = '200px',
  m = '0 0 1.6rem 0',
}: any) {
  // var disabled = field === "can_automatic_trade";
  const navigate = useNavigate();
  const { showRes } = useMyToast();

  const intl = useIntl();

  const [alertState, setAlertState] = useSetState<MyNewAlertProps>({
    message: 'message',
    description: intl.formatMessage({ id: 'text.Description' }),
    cancelText: intl.formatMessage({ id: 'text.Cancel' }),
    confirmText: intl.formatMessage({ id: 'text.Confirm' }),
    link: undefined,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();

  const [value, setValue] = useState(() =>
    field === 'can_automatic_trade' ? '1' : user?.[field]?.toString() ?? '0'
  );

  const doRequest = () => {
    request('ai_trade/setting', { data: { key: field, value: value } })
      .then((res) => {
        showRes(res);
        stateActions.me();
        if (field === 'can_trail_bonus' && value === '1') {
          navigate('/home/aitrade');
        }
      })
      .catch((res) => {
        setValue(value === '0' ? '1' : '0');
        switch (res.code) {
          case 10004:
            setAlertState({
              message: res.message,
              description: 'description',
              cancelText: 'cancel',
              confirmText: 'Look VIP Rules',
              link: '/home/vip',
            });
            onOpen();
            break;
          case 10005:
            setAlertState({
              message: res.message,
              description: 'description',
              cancelText: 'cancel',
              confirmText: 'Go to Verity Identity',
              link: '/home/settings/identity',
            });
            onOpen();
            break;
          case 10008:
            setAlertState({
              message: res.message,
              description: 'description',
              cancelText: 'cancel',
              confirmText: 'Go to Verity Email',
              link: '/home/settings/email',
            });
            onOpen();
            break;
          case 10006:
          case 10007:
          default:
            showRes(res);
            break;
        }
        showRes(res);
      });
  };

  return (
    <Flex display='flex' flexDir='column' height='100%'>
      <Image
        src={svg}
        width={width}
        sx={{ margin: '0 auto' }}
        height={height}
        m={m}
        mt={'28%'}
      />
      <TextHeadLine textAlign='center' fontSize='2rem'>
        {title}
      </TextHeadLine>
      <Text color='#57b4fc' fontSize='1.2rem' lineHeight='0.8rem' mt={1}>
        {subTitle}
      </Text>
      <Text fontSize='18px' pt='20px'>
        {description}
      </Text>

      {/* <RadioGroup
        value={value}
        onChange={setValue}
        size="lg"
        sx={{ fontSize: "30px", fontWeight: "var(--cds-fontWeights-medium)" }}
        m="30px 0"
      >
        <Stack spacing={4} direction="row">
          <Radio value="1">Enable</Radio>
          <Radio value="0" isDisabled={disabled}>
            Disable
          </Radio>
        </Stack>
      </RadioGroup> */}

      {/* <PrimaryButton
        size="lg"
        px="16"
        disabled={disabled}
        onClick={() => {
          if (field === "can_trail_bonus" && value === "1") {
            setAlertState({
              message: "Start Trail",
              description: "Are you sure Get $10,000 USDC for trail",
              cancelText: "cancel",
              confirmText: "YES I DO",
            });
            onOpen();
          } else {
            doRequest();
          }
        }}
      >
        CONFIRM
      </PrimaryButton> */}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        colorScheme='blue'
        isCentered
        size='sm'
      >
        <AlertDialogOverlay>
          <AlertDialogContent sx={{ zIndex: '2000 !important' }}>
            <AlertDialogHeader
              fontSize='lg'
              fontWeight='var(--cds-fontWeights-medium)'
            >
              {alertState.message}
            </AlertDialogHeader>

            <AlertDialogBody>{alertState.description}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {alertState.cancelText}
              </Button>
              <Button
                colorScheme='red'
                onClick={() => {
                  if (field === 'can_trail_bonus' && value === '1') {
                    doRequest();
                  } else if (alertState.link && alertState.link !== '')
                    navigate(alertState.link);
                  onModalClose();
                  onClose();
                }}
                ml={3}
              >
                {alertState.confirmText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
}
