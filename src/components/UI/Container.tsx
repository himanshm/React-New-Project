import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

/* ComponentPropsWithoutRef: this type can be used to get hold of the default props that are accepted by one of the built-in elements. And that's actually not all this type can do. It can also give you a props object for a custom component. So it does not just give you an object of all the accepted props of built-in elements, instead, it also works with custom components. */

// export default function Container<C extends ElementType>({
//   as,
//   children,
//   ...props
// }: ContainerProps<C>) {
//   const Component = as || 'div';
//   return <Component {...props}>{children}</Component>;
// }

// const Container = <C extends ElementType>({
//   as,
//   children,
//   ...props
// }: ContainerProps<C>) => {
//   const Component = as || 'div';
//   return <Component {...props}>{children}</Component>;
// };

const Container = function <C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
};

export default Container;
// The Container component is a generic component that can be used to wrap any content in a container. It accepts a prop called as, which is used to specify the HTML element or custom component to be used as the container. The children prop is used to pass the content
