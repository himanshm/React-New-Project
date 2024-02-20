import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  FormEvent,
} from 'react';

type FormProps = {
  children: ReactNode;
  onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<'form'>;

const Form = function ({ children, onSave, ...props }: FormProps) {
  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }
  return (
    <form
      onSubmit={submitHandler}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
