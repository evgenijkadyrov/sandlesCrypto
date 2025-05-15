import clsx from 'clsx';

import { MarketRowProps } from './types';

import styles from './styles.module.css';

function MarketRow({
	ticker,
	name,
	price,
	percentChange,
	absoluteChange,
	isEven,
	iconBackgroundColor = '#FF69B4',
}: MarketRowProps) {
	const isPositive = percentChange >= 0;

	return (
		<div className={clsx(styles.row, { [styles.even]: isEven })}>
			<div
				className={styles.icon}
				style={{ backgroundColor: iconBackgroundColor }}
			>
				<span className={styles.ticker}>{ticker.charAt(0)}</span>
			</div>
			<div className={styles.details}>
				<span className={styles.ticker}>{ticker}</span>
				<span className={styles.name}>{name}</span>
			</div>
			<div className={styles.price}>{price.toFixed(1)}</div>
			<div className={styles.change}>
				<span
					className={clsx({
						[styles.positive]: isPositive,
						[styles.negative]: !isPositive,
					})}
				>
					{isPositive ? '+' : ''}
					{percentChange.toFixed(2)}%
				</span>
				<span
					className={clsx({
						[styles.positive]: isPositive,
						[styles.negative]: !isPositive,
					})}
				>
					{isPositive ? '+' : ''}
					{absoluteChange.toFixed(2)}
				</span>
			</div>
		</div>
	);
}

export { MarketRow };
