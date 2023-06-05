import { request } from '@/common';

export const showTransfer = () => request('transfer/show');

export const showStaking = () => request('transfer/show_staking');