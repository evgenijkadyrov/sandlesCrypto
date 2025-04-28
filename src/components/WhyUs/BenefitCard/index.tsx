import { BenefitCardProps } from './types';

import styles from './styles.module.css';

export function BenefitCard({
	iconSrc,
	iconAlt,
	title,
	description,
}: BenefitCardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.icon}>
				<img src={iconSrc} alt={iconAlt} className={styles.iconImage} />
			</div>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
		</div>
	);
}
