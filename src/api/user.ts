import { request } from '../common';

/**
 *  @description 获取用户 popover 信息，
 *  @param id: number
 */
export const showUsers = (id: number) =>
  request('/users/show', {
    data: { id },
  });

export const getNewbieCard = (id: number) => {
  return request('/users/get_newbie_card', {
    data: { id },
  });
}

export const getFirstWithdrawalFree = (id: number) => {
  return request('/users/get_first_withdrawal_free', {
    data: { id },
  });
}