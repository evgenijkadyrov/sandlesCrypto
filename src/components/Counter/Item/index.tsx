import styles from '@/components/Counter/styles.module.css';
import { ItemType } from '@/components/Counter/types';

export function CounterItem({ icon, text }: ItemType) {
	return (
		<div className={styles.item}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.text}>{text}</div>
		</div>
	);
}
