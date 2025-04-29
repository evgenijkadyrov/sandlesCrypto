import { CryptoActionCard } from '@/components/TraderSection/CryptoActionCard';
import { CryptoPriceCard } from '@/components/TraderSection/CryptoCard';

import { CRYPTO_ACTION_CARDS, TITLE } from './config';

import styles from './styles.module.css';

export const TraderSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.title}>{TITLE}</div>
				<div className={styles.contentContainer}>
					<div className={styles.table}>
						<img src="/images/aboutUs-pattern.png" alt="About Us pattern" />
						<div className={styles.cryptoTableContainer}>
							<CryptoPriceCard />
							<img
								src="/icons/trader/binance-chart.png"
								alt="Binance"
								className={styles.binanceChart}
							/>
						</div>
					</div>

					<div className={styles.description}>
						{CRYPTO_ACTION_CARDS.map((card) => (
							<CryptoActionCard
								key={card.title}
								iconSrc={card.iconSrc}
								iconAlt={card.iconAlt}
								title={card.title}
								description={card.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
