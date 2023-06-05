import { Flex, Heading, Highlight, Image } from '@chakra-ui/react';
import NewbieGift from '@/assets/images/gift-new.svg';
import React from 'react';
import { useIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl';

export const MemberShipTips = () => {
  const intl = useIntl();
  return (
    <Flex direction='column' alignItems='center' mt={4} cursor='pointer'>
      <Heading
        width='100%'
        alignItems='center'
        position='absolute'
        top='20px'
        size='xs'
        color='gray.500'
        display='flex'
        justifyContent='center'
      >
        <Highlight
          query={['$100']}
          styles={{ px: '1', py: '1', color: 'blue' }}
        >
          {intl.formatMessage({ id: 'text.NewStaking' })}
        </Highlight>
        <Image src={NewbieGift} h='25px' px={1} />
        <span>
          {' '}
          <FormattedMessage id={'text.Newcomer'}></FormattedMessage>
        </span>
      </Heading>
    </Flex>
  );
};
