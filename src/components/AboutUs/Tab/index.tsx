import { TabProps } from '@/components/AboutUs/Tab/types';

import styles from './styles.module.css';

export function Tab({ label, isActive, onClick }: TabProps) {
	return (
		<button
			className={`${styles.tab} ${isActive ? styles.active : ''}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
}
