import { CryptoActionCardProps } from '@/components/TraderSection/types';

import styles from './styles.module.css';

export function CryptoActionCard({
	iconSrc,
	iconAlt,
	title,
	description,
}: CryptoActionCardProps) {
	return (
		<div className={styles.card}>
			<img src={iconSrc} alt={iconAlt} className={styles.icon} />
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
}
