import * as React from 'react'
import styles from './Button.module.css'
interface Props {
  children: React.ReactNode | string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({children, ...props}) => {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default Button
