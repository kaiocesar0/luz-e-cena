interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

import styles from './inputText.module.css'

const InputText = ({ className, ...props }: InputTextProps) => {
  return (
    <input className={`${styles.input} ${className}`} {...props}/>
  )
}

export default InputText
