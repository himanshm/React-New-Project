import { type ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

const Container = function ({ as: Component }: ContainerProps) {
  return <Component />;
};

export default Container;
