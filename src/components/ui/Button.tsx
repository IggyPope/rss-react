import styles from './Button.module.scss';

export const Button = ({
  children,
  type = 'button',
  onClick,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
