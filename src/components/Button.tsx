import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

// the absence of the href prop is not enough information to deduct that it must be a button.
// Check the last commit for the better approach

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

type Props = ButtonProps | AnchorProps;

/* We can also return a more specific type of Boolean. A more specific type that carries extra information for TypeScript, a so-called type predicate. We can return props is AnchorProps. Now this is some special TypeScript code that can be used as a return value type, to tell TypeScript that this function returns a Boolean but that if the Boolean value is true, this argument (props) that has been passed to this function is of a specific type (AnchorProps). So we're giving this extra information to TypeScript here. */

const isAnchorProps = function (props: Props): props is AnchorProps {
  return 'href' in props;
};

const Button = function (props: Props) {
  if (isAnchorProps(props)) {
    return (
      <a
        className='button'
        {...props}
      ></a>
    );
  }

  return (
    <button
      className='button'
      {...props}
    ></button>
  );
};

export default Button;
