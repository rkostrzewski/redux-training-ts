import React, { SFC } from 'react'
import { Link } from 'react-router-dom'

import { Category } from '../../modules/categories/types';
import { Product } from '../../modules/products/types';
import NotFound from '../NotFound';

import styles from './productList.module.css';

interface ProductListProps {
  category: Category | undefined;
  products: Product[];
}

const ProductList: SFC<ProductListProps> = ({ category, products }) => category
  ? (
    <div>
      <h1 className={styles.category}>{category.name}</h1>
      <span className={styles.categoryItemCount}>
        ({products.length} items)
    </span>
      <div className={styles.productList}>
        {
          products.map(({ id, name, price, image }) => (
            <ProductListItem key={id} id={id} name={name} price={price} image={image} />
          ))
        }
      </div>
    </div>
  )
  : (
    <NotFound />
  );

export default ProductList

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductListItem: SFC<ProductProps> = ({ id, name, image, price }) => (
  <Link className={styles.product} to={`/product/${id}`}>
    <img className={styles.image} src={image} alt={name} />
    <div className={styles.name}>{name}</div>
    <span>${price}</span>
  </Link>
)
