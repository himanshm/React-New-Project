import { ComponentPropsWithRef } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithRef<'input'>;

const Input = function ({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
      />
    </p>
  );
};

export default Input;
