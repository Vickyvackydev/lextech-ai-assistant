import React, { SetStateAction } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  register?: any;
  error?: any;
}

export interface SubmitButtonProps {
  onClick: () => void;
}
export interface ButtonPropertyTypes {
  onClick?: any;
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
  className?: string;
  title?: string;
  icons?: string;
  iconClassName?: string;
  type?: any;
  isLoading?: boolean;
}
export interface UserPayload {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  whatsapp_number: string;
  email_verified_at: string;
  scn: string;
  profile_photo: null | string;
  token: string;
  call_to_bar_certificate: string;
  gender: string;
  stamp_photo: null | string;
}

export interface dataProps {
  id: number | string;
  name: string;
  quantity: string;
  amount: string;
  unit: string;
  handleClick: () => void;
  stats: "Search" | "Updated";
}

export interface ModalActionProps {
  open: boolean;
  close: () => void;
  selectedwallet?: string;
  handleAction?: (str: string) => void;
  gobackAction?: () => void;
  handleClick?: () => void;
  error?: boolean;
  state?: "";
}
export interface ProductProps {
  title: string;
  category: string;
  company: string;
}
