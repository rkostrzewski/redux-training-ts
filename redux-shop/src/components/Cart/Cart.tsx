import React, { SFC } from 'react'

import Link from '../Link';
import Button from '../Button';
import ProductInCart from './ProductInCart'

import { Product } from '../../modules/shop/types';

import styles from './cart.module.css';

interface CartProps {
  products: Array<{ product: Product | undefined, quantity: number }>;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
}

const Cart: SFC<CartProps> = ({
  products = [],
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) => {
  if(!products.length) {
    return (
      <div className={styles.cartContainer}>
        There are no items in cart
      </div>
    )
  }

  return (
    <div className={styles.cartContainer}>
      {
        products.map(({ product, quantity }) => product && (
          <ProductInCart
            key={product.id}
            product={product}
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeProduct={removeProduct}
          />
        ))
      }
      <Button as={Link} to='/checkout' className={styles.checkout}>
        Checkout
      </Button>
    </div>
  )
}

export default Cart