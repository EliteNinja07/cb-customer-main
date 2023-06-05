import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { useSearchParams } from 'react-router-dom';
import { MyCard, MyRender } from '../../../../common';
import Staking from './Staking';
import Tabs from './Tabs';
import Withdrawal from './Withdrawal';

export default function WithdrawalAndStaking({ api, methods, user, res }: any) {
  const intl = useIntl();
  const [searchParams]: any = useSearchParams();
  const [key, setKey] = useState(searchParams.get('tab') || 'Withdrawal');
  const [data, setData] = useState({
    min: 0,
    max: 0,
    fee: 0,
    balance: 0,
    canFree: false,
  } as any);

  const items = [
    {
      value: 'Withdrawal',
      label: intl.formatMessage({ id: 'text.Withdrawal' }),
    },
    { value: 'Staking', label: intl.formatMessage({ id: 'text.Staking' }) },
  ];

  useEffect(() => {
    if (!res?.preWithdrawal)
      return api.pre_withdrawal().then((res1: any) =>
        setData({
          min: parseFloat(res1.min),
          max: parseFloat(res1.max),
          fee: res1.fee,
          balance: parseFloat(res1.balance),
          canFree: res1.canFree,
        }),
      );
    const { balance, min, max, fee } = res.preWithdrawal;
    if (balance && min && max && fee) {
      setData({
        min: parseFloat(res?.preWithdrawal?.min),
        max: parseFloat(res?.preWithdrawal?.max),
        fee: res?.preWithdrawal?.fee,
        balance: parseFloat(res?.preWithdrawal?.balance),
        canFree: res.preWithdrawal.canFree,
      });
    }
  }, [res?.preWithdrawal]);

  return (
    <MyCard flexDir='column' mb={5}>
      <Tabs value={key} items={items} onChange={setKey} />
      <MyRender
        render={() => {
          if (key == 'Withdrawal')
            return (
              <Withdrawal
                methods={methods}
                user={user}
                price={res.price}
                res={data}
              />
            );
          else
            return (
              <Staking
                api={api}
                methods={methods}
                user={user}
                price={res.price}
                balance={data.balance}
              />
            );
        }}
      />
    </MyCard>
  );
}
