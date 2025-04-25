import clsx from 'clsx';

import { FeatureCardProps } from './types';

import styles from './styles.module.css';

export function FeatureCard({
	title,
	description,
	imageSrc,
	imageAlt,
	imagePosition = 'bottom',
}: FeatureCardProps) {
	return (
		<div className={styles.card}>
			{imagePosition === 'top' && (
				<img
					src={imageSrc}
					alt={imageAlt}
					className={clsx(styles.image, styles.firstElement)}
				/>
			)}
			<div
				className={clsx(styles.content, {
					[styles.firstElement]: imagePosition !== 'top',
				})}
			>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
				<a href="#" className={styles.link}>
					Read More
				</a>
			</div>
			{imagePosition === 'bottom' && (
				<img src={imageSrc} alt={imageAlt} className={styles.image} />
			)}
		</div>
	);
}
