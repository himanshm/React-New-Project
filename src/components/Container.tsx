import { type ReactNode, type ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
  children: ReactNode;
};

const Container = function ({ as: Component, children }: ContainerProps) {
  return <Component>{children}</Component>;
};

export default Container;
