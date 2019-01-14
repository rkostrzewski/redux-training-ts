import React, { SFC, DetailedHTMLProps, HTMLAttributes } from 'react';
import classnames from 'classnames';

import styles from './cart.module.css'
import { Product } from '../../modules/shop/types';

interface IconButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
}

const IconButton: SFC<IconButtonProps> = ({ className, ...rest}: IconButtonProps) => (
  <i
    className={classnames(styles.iconButton, 'material-icons', className)}
    role="button"
    tabIndex={1}
    {...rest}
  />
);

interface ProductInCartProps {
  product: Product;
  quantity: number;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
}

const ProductInCart: SFC<ProductInCartProps> = ({
  product, quantity, increaseQuantity, decreaseQuantity, removeProduct,
}) => (
  <div className={styles.product}>
    <div className={styles.name}>{product.name}</div>
    <IconButton onClick={() => decreaseQuantity(product.id)} aria-label="decrease quantity">remove</IconButton>
    <div className={styles.quantity}>{quantity}</div>
    <IconButton onClick={() => increaseQuantity(product.id)} aria-label="add quantity">add</IconButton>
    <IconButton onClick={() => removeProduct(product.id)} aria-label="remove product">clear</IconButton>
  </div>
)

export default ProductInCart;