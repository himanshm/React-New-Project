import { forwardRef, type ComponentPropsWithRef } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithRef<'input'>;

/*forwardRef, which is coming from React, is a generic function where you don't have to but typically should provide extra type information, extra type information about some related type, and here the related type is the type of value that will eventually be stored in that ref. And in this case, that will be an HTML input element. if you do explicitly specify one type, you also have to specify the second type. And the second type simply refers to the type of props this wrapped function will receive.The first type refers to the value the ref will manage. The second generic type you pass to forward ref will refer to the type of props the wrapped function will receive, */

const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        name={id}
        id={id}
        {...props}
      />
    </p>
  );
});

export default Input;
