import { useThemeContext } from '@/context/hooks';

import styles from './Button.module.scss';

export const Button = ({
  children,
  type = 'button',
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { theme } = useThemeContext();

  return (
    <button
      {...props}
      className={[
        styles.button,
        props.className || null,
        theme === 'light' ? styles.light : null,
      ]
        .filter(Boolean)
        .join(' ')}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
