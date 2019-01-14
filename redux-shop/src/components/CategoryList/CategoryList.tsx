import React, { SFC } from 'react'
import { Link } from 'react-router-dom'

import { Category, Product } from '../../modules/shop/types';

import Button from '../Button'

import styles from './categoryList.module.css';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: SFC<CategoryListProps> = ({ categories }) => (
  <div>
    {
      categories.map(({ id, name, image }) => (
        <ProductCategory key={id} id={id} name={name} image={image} />
      ))
    }
  </div>
)

export default CategoryList

interface ProductCategoryProps {
  id: number;
  name: string;
  image: string;
};

const ProductCategory: SFC<ProductCategoryProps> = ({ id, name, image }) => {
  const link = `/category/${id}`

  return (
    <div className={styles.category}>
      <Link to={link}>
        <img className={styles.image} src={image} alt={name} />
      </Link>
      <h2 className={styles.title}>
        {name}
      </h2>
      <Button className={styles.shopNow} as={Link} to={link}>
        Shop Now
      </Button>
    </div>
  )
}
