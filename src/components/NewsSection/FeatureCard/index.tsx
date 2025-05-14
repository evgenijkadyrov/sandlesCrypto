import { FeatureCardProps } from './types';

import styles from './styles.module.css';

export function FeatureCard({
	title,
	description,
	imageSrc,
	imageAlt,
	author,
}: FeatureCardProps) {
	return (
		<div className={styles.card}>
			<img src={imageSrc} alt={imageAlt} className={styles.image} />
			<p className={styles.description}>{author}</p>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
		</div>
	);
}
