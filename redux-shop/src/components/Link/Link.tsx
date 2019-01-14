import React, { SFC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import classnames from 'classnames';

import styles from './link.module.css'

const Link: SFC<LinkProps> = ({ className, ...rest }) => (
  <RouterLink className={classnames(styles.link, className)} {...rest} />
)

export default Link