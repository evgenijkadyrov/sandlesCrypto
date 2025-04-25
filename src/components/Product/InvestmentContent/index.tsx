import { ReactNode } from 'react';

import { Button } from '@/components/Button';

import styles from './styles.module.css';

type InvestmentContentProps = {
	title: string;
	subtitle: ReactNode;
	description: string;
	imageSrc: string;
	imageAlt: string;
};

export function InvestmentContent({
	title,
	subtitle,
	description,
	imageSrc,
	imageAlt,
}: InvestmentContentProps) {
	return (
		<div className={styles.content}>
			<img src={imageSrc} alt={imageAlt} className={styles.chartImage} />
			<div className={styles.contentText}>
				<p className={styles.contentTitle}>{title}</p>
				<h3 className={styles.contentSubtitle}>{subtitle}</h3>
				<p className={styles.contentDescription}>{description}</p>
				<Button variant={'gray'} size={'extraLarge'}>
					Creat Account For Free
				</Button>
			</div>
		</div>
	);
}
