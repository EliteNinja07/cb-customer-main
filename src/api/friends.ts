import { request, useMyToast } from '@/common';

export const onFollow = (data: any) =>
  request('friends/follow', { data: data });

export const onUnFollow = (data: any) =>
  request('friends/un_follow', { data: data });
