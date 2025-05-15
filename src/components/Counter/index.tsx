import { CounterItem } from '@/components/Counter/Item';

import { COUNTER_ITEMS, RATE } from './config';

import styles from './styles.module.css';

export function Counter() {
	return (
		<section className={styles.counter}>
			<div className={styles.container}>
				{COUNTER_ITEMS.map((item, i) => {
					return <CounterItem key={i} icon={item.value} text={item.label} />;
				})}
			</div>
			<div className={styles.ratingContainer}>
				<img src={'/icons/counter-flag.png'} alt="rating" />
				<div className={styles.description}>
					<div className={styles.starsContainer}>
						{[...Array(5)].map((_, i) => (
							<img key={i} src={'/icons/star.png'} alt="stars" />
						))}
					</div>
					<div className={styles.descriptionText}>{RATE}</div>
				</div>
			</div>
		</section>
	);
}
