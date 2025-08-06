import styles from './fieldset.module.css'

interface FieldSetProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const FieldSet = ({ children, variant = 'primary', ...props }: FieldSetProps) => {
  return (
    <fieldset className={`${styles.wrapper} ${variant === 'primary' ? styles.primary : styles.secondary}`} {...props}>
      {children}
    </fieldset>
  )
}

export default FieldSet;
