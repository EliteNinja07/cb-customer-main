import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { PrimaryButton } from '@/common';
import { CheckCircleIcon } from '@chakra-ui/icons';
import walletMoney from '@/assets/images/wallet-money.svg';
import debitCard from '@/assets/images/debit-card.svg';
import { FormattedMessage } from 'react-intl';

export function StakingMembership(props: {
  open: boolean;
  onClose: () => void;
  enjoyed?: boolean;
  onDrawShip: () => void;
}) {
  const { onDrawShip, enjoyed } = props;
  return (
    <Modal isOpen={props.open} onClose={props.onClose} size='2xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0} m={0}>
            <Flex
              alignItems='center'
              pt={8}
              pb={2}
              px={{ base: 0, sm: 0, md: 6, lg: 6 }}
            >
              <Flex w='full' textAlign='center' fontSize={'md'}>
                <Flex
                  direction={'column'}
                  background='#7777770f'
                  w='50%'
                  p='20px'
                  mr={5}
                  borderRadius='20px'
                  border='1px dashed #76767682'
                >
                  <Text
                    fontSize={{
                      base: '1rem',
                      sm: '1rem',
                      md: '1.2rem',
                      lg: '1.2rem',
                    }}
                    mb={4}
                  >
                    <FormattedMessage
                      id={'text.newbieUpgradeCard'}
                    ></FormattedMessage>
                  </Text>
                  <Image m='0 auto' w='60px' mb={6} src={walletMoney}></Image>
                  <Flex alignItems={'center'} pb={2}>
                    <CheckCircleIcon color={'#58b4fc'} />
                    <Text pl={3} textAlign={'center'} fontWeight='300'>
                      60x <FormattedMessage id='text.Leverage' />
                    </Text>
                  </Flex>
                  <Flex alignItems={'center'} pb={2} fontWeight='300'>
                    <CheckCircleIcon color={'#58b4fc'} />
                    <Text pl={3}>
                      <FormattedMessage
                        id={'trade.config.item5.title'}
                      ></FormattedMessage>
                    </Text>
                  </Flex>
                  <Flex alignItems={'center'} pb={2} fontWeight='300'>
                    <CheckCircleIcon color={'#58b4fc'} />
                    <Text pl={3}>
                      <FormattedMessage
                        id={'trade.config.item7.title'}
                      ></FormattedMessage>
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  direction={'column'}
                  background='#7777770f'
                  w='50%'
                  p='20px'
                  borderRadius='20px'
                  border='1px dashed #76767682'
                >
                  <Text
                    fontSize={{
                      base: '1rem',
                      sm: '1rem',
                      md: '1.2rem',
                      lg: '1.2rem',
                    }}
                    mb={4}
                  >
                    <FormattedMessage
                      id={'text.newbieFreeFeeCard'}
                    ></FormattedMessage>
                  </Text>
                  <Image m='0 auto' w='60px' mb={6} src={debitCard}></Image>
                  <Flex alignItems={'center'} fontWeight='300'>
                    <CheckCircleIcon color={'#58b4fc'} />
                    <Text pl={3} textAlign={'left'}>
                      <FormattedMessage
                        id={'text.firstTimeFree'}
                      ></FormattedMessage>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalHeader>
        <ModalFooter justifyContent={'center'} mb={3}>
          {!enjoyed && (
            <PrimaryButton onClick={onDrawShip}>
              <FormattedMessage id={'text.getNewbieCard'}></FormattedMessage>
            </PrimaryButton>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
