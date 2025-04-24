import clsx from 'clsx';

import { ButtonProps } from '@/components/Button/types';

import styles from './styles.module.css';

export function Button({
	children,
	variant = 'primary',
	size = 'medium',
	className = '',
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(styles.button, styles[variant], styles[size], className)}
			{...props}
		>
			{children}
		</button>
	);
}
