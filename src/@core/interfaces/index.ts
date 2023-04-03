// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

import { ChangeEvent, FocusEvent, MouseEvent } from "react";

export type User = {
  email: string;
  balance: number;
};

// Forms types
export type RegisterFormValuesType = {
  email: string;
  password: string;
  passwordConfirm: string;
};
export type RegisterFormTouchedType = {
  username?: boolean;
  email?: boolean;
  password?: boolean;
};
export type RegisterFormErrorsType = {
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

export type FormValuesType = {
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

export type FormTouchedType = RegisterFormTouchedType;
export type FormErrorsType = RegisterFormErrorsType;
export type FormValidateFunctionType = (
  values: FormValuesType
) => RegisterFormErrorsType;

// Event types
export type ChangeEventType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
export type FormEventType = MouseEvent<HTMLElement>;
export type FocusEventType = FocusEvent<HTMLTextAreaElement | HTMLInputElement>;
