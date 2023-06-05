import {
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
  Checkbox,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import { formatMoney } from '@/common';
import MoneyImg from '@/assets/images/usdc.svg';
import Fee from '@/assets/images/fee.svg';
import { useState } from 'react';

export default ({ value, onClose, tdata, onChange }: any) => {
  const [useFree, setUseFree] = useState(false);
  console.log(tdata);
  return (
    <AlertDialogContent>
      <AlertDialogHeader fontSize='lg' fontWeight='bold'>
        <FormattedMessage id='text.Withdraw' />
      </AlertDialogHeader>
      <AlertDialogBody sx={{ lineHeight: '2.5rem' }}>
        <Flex sx={{ fontSize: '1.2rem' }}>
          <FormattedMessage id='text.WithdrawAmount' />：
          <Image w='25px' pr='5px' src={MoneyImg} />
          <Text>{formatMoney(value, '')} USDC</Text>
        </Flex>
        <Flex sx={{ fontSize: '1.2rem' }}>
          <FormattedMessage id='text.ServiceCharge' />：{' '}
          <Image w='25px' pr='5px' src={Fee} />
          <Text sx={{ color: '#17aa00' }} mr={2}>
            <Text
              decoration={useFree ? 'line-through' : ''}
              whiteSpace={'nowrap'}
              display={'inline'}
            >
              {formatMoney(tdata?.fee, '')}
            </Text>
            USDC
          </Text>
          {tdata.canFree && (
            <Checkbox
              checked={useFree}
              onChange={(e) => {
                setUseFree(e.target.checked);
              }}
            >
              <FormattedMessage id={'text.useFree'}></FormattedMessage>
            </Checkbox>
          )}
        </Flex>
        <Flex sx={{ fontSize: '1.2rem' }}>
          <FormattedMessage id='text.Receipt' />：
          <Image w='25px' pr='5px' src={MoneyImg} />
          <Text sx={{ color: '#f00' }}>
            {formatMoney(value - (useFree ? 0 : tdata?.fee), '')} USDC
          </Text>
        </Flex>
      </AlertDialogBody>
      <AlertDialogFooter>
        <Button ml={3} colorScheme='blue' onClick={() => onChange(useFree)}>
          <FormattedMessage id='text.OK' />
        </Button>
        <Button onClick={onClose} ml={2}>
          <FormattedMessage id='text.Cancel' />
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
