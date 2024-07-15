import styles from './Button.module.scss';

export const Button = ({
  children,
  type = 'button',
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
