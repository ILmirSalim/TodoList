import { ChangeEvent, FormEvent, RefObject } from "react";

export interface FormProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onChange: (name: string, value: string) => void;
    group: {
      name: string;
      color: string;
    };
    handleUserChange: (e: ChangeEvent<HTMLInputElement>) => void;
    users: string[];
    disabled: boolean;
    inputRef: RefObject<HTMLInputElement>;
  }