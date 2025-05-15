import { Button } from '@/components/Button';
import { BenefitCard } from '@/components/WhyUs/BenefitCard';

import { BENEFIT_CARDS, TITLE } from './config';

import styles from './styles.module.css';

export const WhyUsBlock = () => {
	return (
		<section className={styles.section}>
			<div className={styles.title}>{TITLE}</div>
			<div className={styles.container}>
				{BENEFIT_CARDS.map((card) => (
					<BenefitCard
						key={card.title}
						iconSrc={card.iconSrc}
						iconAlt={card.iconAlt}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
			<Button size={'large'} variant={'primary'}>
				Get Started
			</Button>
			<Button size={'large'} variant={'white'}>
				View More
			</Button>
		</section>
	);
};
