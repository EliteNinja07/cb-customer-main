type MyAlertProps = {
  message?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  link?: string;
};

export type IUserPopoverDetail = {
  id: number;
  nickname: string;
  avatar: string;
  address: string;
  vips_id: number;
  total_income: string;
  total_loyalty_value: string;
  online_status: boolean;
  follow_status: string;
};
