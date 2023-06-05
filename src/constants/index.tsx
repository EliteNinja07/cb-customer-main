import { FormattedMessage } from 'react-intl';

export const getFollowStatus = (intl: any) => ({
  No: intl.formatMessage({ id: 'text.follow' }),
  Yes: intl.formatMessage({ id: 'text.unfollow' }),
  Both: intl.formatMessage({ id: 'text.unfollow' }),
});
