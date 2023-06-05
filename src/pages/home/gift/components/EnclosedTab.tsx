import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useIntl } from 'react-intl';
const items = ['gift/sent_gift', 'gift/received_gift', 'gift/exchanged_list'];
const styles = {
  active: {
    color: '#0052ff',
    backgroundColor: '#f5f8ff',
    fontSize: { base: '12px', sm: '12px', md: '14px', lg: '14px' },
    padding: '0.6rem 1rem',
    borderRadius: '100px',
    cursor: 'pointer',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    justifyContent: 'center',
  },
  default: {
    color: '#666',
    fontSize: { base: '12px', sm: '12px', md: '14px', lg: '14px' },
    padding: '0.6rem 1rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export default ({ idx, onChange }: any) => {
  const [getIdxTab, setIdxTab] = useState(idx);
  const intl = useIntl();
  const TTab = [
    intl.formatMessage({ id: 'text.SentGift' }),
    intl.formatMessage({ id: 'text.ReceivedGift' }),
    intl.formatMessage({ id: 'text.ExchangeAirdrop' }),
  ];
  return (
    <Flex
      fontSize='0.9rem'
      sx={{ gap: { base: '0', sm: '0', md: '1rem', lg: '1rem' } }}
      fontWeight='var(--cds-fontWeights-medium)'
    >
      {TTab?.map((res: any, index: number) => {
        return (
          <Flex
            key={`tab_${index}`}
            sx={index == getIdxTab ? styles.active : styles.default}
            onClick={() => {
              setIdxTab(index);
              onChange(index, items[index]);
            }}
          >
            {res}
          </Flex>
        );
      })}
    </Flex>
  );
};
