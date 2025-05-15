import { CryptoInfoProps } from '@/components/TraderSection/types';

import styles from './styles.module.css';

export function CryptoInfo({
	iconSrc,
	iconAlt,
	name,
	ticker,
	percentChange,
}: CryptoInfoProps) {
	return (
		<div className={styles.crypto}>
			<img src={iconSrc} alt={iconAlt} className={styles.icon} />
			<span className={styles.name}>
				{name} <span className={styles.ticker}>{ticker}</span>
			</span>
			<span className={styles.percentChange}>+{percentChange}%</span>
		</div>
	);
}
