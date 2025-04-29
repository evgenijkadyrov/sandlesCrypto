import { Sparklines, SparklinesLine } from 'react-sparklines';

import { CRYPTO_PRICE_CARD } from '../config';
import { CryptoInfo } from '../CryptoInfo';

import styles from './styles.module.css';

export function CryptoPriceCard() {
	const { cryptos, price, holding, sparklineData } = CRYPTO_PRICE_CARD;

	return (
		<div className={styles.card}>
			{cryptos.map((crypto) => (
				<CryptoInfo
					key={crypto.ticker}
					iconSrc={crypto.iconSrc}
					iconAlt={crypto.iconAlt}
					name={crypto.name}
					ticker={crypto.ticker}
					percentChange={crypto.percentChange}
				/>
			))}
			<div className={styles.statsContainer}>
				<div className={styles.stats}>
					<div className={styles.stat}>
						<span className={styles.statLabel}>Price</span>
						<span className={styles.statValue}>{price}</span>
					</div>
					<div className={styles.stat}>
						<span className={styles.statLabel}>Holding</span>
						<span className={styles.statValue}>{holding}</span>
					</div>
				</div>
				<div className={styles.sparkline}>
					<Sparklines data={sparklineData} width={150} height={40}>
						<SparklinesLine color="var(--color-green)" />
					</Sparklines>
				</div>
			</div>
		</div>
	);
}
