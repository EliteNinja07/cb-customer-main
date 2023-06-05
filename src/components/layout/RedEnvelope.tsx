import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  AlertDialogCloseButton,
  Image,
  Center,
  Box,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { redirect, useLocation } from 'react-router';
import { useMyToast, request, stateActions, useMyState } from '../../common';
import gift from '../../../public/img/giftbox-1.svg';
export default () => {
  const { snap } = useMyState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = React.useRef();
  const { showRes, showSuccess } = useMyToast();
  const location = useLocation();

  const onReceiveGift = (code: string) => {
    request('gift/receive_gift', { data: { gift_code: code } })
      .then((res) => {
        showSuccess({
          title: 'ok!',
        });
        onClose();
        stateActions.setGiftCode('');
        setTimeout(() => {
          if (location.pathname == '/home/gift') {
            redirect('/home/gift');
          } else {
            // location.reload();
          }
        }, 1000);
      })
      .catch((err: any) => {
        stateActions.setGiftCode('');
        onClose();
        showRes(err);
      });
  };

  useEffect(() => {
    console.log('Red', snap.storage);

    if (snap.storage.giftCode) {
      onOpen();
    }
  }, []);
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset='slideInBottom'
      >
        <AlertDialogOverlay />
        <AlertDialogContent mx={6}>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            <FormattedMessage id='RedEnvelope' />
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogBody>
            <Center flexDirection={'column'}>
              <Image src={gift} w={20} h={20}></Image>
              <FormattedMessage id='RedEnvelopeRed' />
            </Center>
          </AlertDialogBody>

          <AlertDialogFooter justifyContent={'center'}>
            <Button
              colorScheme='messenger'
              onClick={() => {
                onReceiveGift(snap.storage.giftCode);
              }}
              ml={3}
            >
              <FormattedMessage id='ReceiveBtn' />
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
