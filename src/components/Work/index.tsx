import { FEATURES, TITLE } from '@/components/Work/config';
import { FeatureCard } from '@/components/Work/FeatureCard';

import styles from './styles.module.css';

export const Work = () => {
	return (
		<section className={styles.container}>
			<div className={styles.title}>{TITLE}</div>
			<div className={styles.itemsContainer}>
				{FEATURES.map((feature) => (
					<FeatureCard
						key={feature.title}
						title={feature.title}
						description={feature.description}
						imageSrc={feature.imageSrc}
						imageAlt={feature.imageAlt}
						imagePosition={feature.imagePosition}
					/>
				))}
			</div>
		</section>
	);
};
