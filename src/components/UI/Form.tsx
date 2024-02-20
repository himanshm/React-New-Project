import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  FormEvent,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react';

type FormProps = {
  children: ReactNode;
  onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<'form'>;

export type FormRef = {
  clear: () => void;
};

// first generic type here is the type that describes the type of the ref that's forwarded. The second generic type is the type of the props that the wrapped function will receive.

const Form = forwardRef<FormRef, FormProps>(function (
  { children, onSave, ...props },
  ref
) {
  /* ref I'm creating with useRef inside of the Form component, and that's the ref that's connected to the native form element.It is not the incoming ref. */

  const form = useRef<HTMLFormElement>(null);
  // useImperativeHandle:  this hook basically only works in a component that also receives a forwarded ref,
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log(`Clearing form with ref: ${form.current}`);
        form.current?.reset();
      },
    };
  });

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
      ref={form}
    >
      {children}
    </form>
  );
});

export default Form;
