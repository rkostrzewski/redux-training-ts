import React, { ButtonHTMLAttributes, ComponentType } from 'react';
import classnames from 'classnames';

import styles from './button.module.css';

type ButtonProps<T extends {}> = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: ComponentType<T>;
} & T;

function Button <T extends {}>(props: ButtonProps<T>) {
  const { as, className, ...rest } = props as any;
  const ElementType = (as || 'button') as ComponentType<any>;

  return (
    <ElementType className={classnames(styles.button, className)} {...rest} />
  )
};

export default Button