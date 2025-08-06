import styles from './tag.module.css'
import classNames from 'classnames'

type Censura = 'Livre' | '10 anos' | '12 anos' | '14 anos' | '16 anos' | '2D' | '3D';

type Categoria = '2D' | '3D';

interface TagProps {
  value: Censura | Categoria
} 

const tagClasses = {
  Livre: styles.livre,
  "10 anos": styles.dez,
  "12 anos": styles.doze,
  "14 anos": styles.catorze,
  "16 anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
};

const Tag = ({value}: TagProps) => {
  const classe = classNames(styles.tag, tagClasses[value])
  return (
    <span className={classe}>{value}</span>
  )
}

export default Tag
