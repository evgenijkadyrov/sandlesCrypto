import {
	CryptoActionCardData,
	CryptoPriceCardData,
} from '@/components/TraderSection/types';

import styles from './styles.module.css';

export const TITLE = (
	<>
		Become a <span className={styles.colorText}>Skyflex</span> trader in seconds
	</>
);

export const CRYPTO_ACTION_CARDS: CryptoActionCardData[] = [
	{
		iconSrc: '/icons/trader/book.png',
		iconAlt: 'Learn Crypto Icon',
		title: 'Learn Crypto',
		description:
			'Completely Synergize Resource Taxing Niche Markets. Professionally Cultivate One-To-One Customer Service With Robust Ideas. Dynamically.',
	},
	{
		iconSrc: '/icons/trader/coin.png',
		iconAlt: 'Buy Crypto Icon',
		title: 'Buy Crypto',
		description:
			'Completely Synergize Resource Taxing Niche Markets. Professionally Cultivate One-To-One Customer Service With Robust Ideas. Dynamically.',
	},
	{
		iconSrc: '/icons/trader/chart.png',
		iconAlt: 'Trade Anywhere Icon',
		title: 'Trade Anywhere',
		description:
			'Completely Synergize Resource Taxing Niche Markets. Professionally Cultivate One-To-One Customer Service With Robust Ideas. Dynamically.',
	},
];

export const CRYPTO_PRICE_CARD: CryptoPriceCardData = {
	cryptos: [
		{
			iconSrc: '/icons/trader/bitcoin.svg',
			iconAlt: 'Bitcoin Icon',
			name: 'Bitcoin',
			ticker: 'BTC',
			percentChange: 1.5,
		},
		{
			iconSrc: '/icons/trader/ethereum.svg',
			iconAlt: 'Ethereum Icon',
			name: 'Ethereum',
			ticker: 'ETH',
			percentChange: 4.23,
		},
		{
			iconSrc: '/icons/trader/cardano.svg',
			iconAlt: 'Avainance',
			name: 'Cardano',
			ticker: 'CAR',
			percentChange: 4.46,
		},
		{
			iconSrc: '/icons/trader/litecoin.svg',
			iconAlt: 'Binance',
			name: 'Binance',
			ticker: 'BNB',
			percentChange: 3.46,
		},
	],
	price: '$3,872.83',
	holding: '37,54 ETH',
	sparklineData: [
		100, 120, 110, 130, 125, 140, 135, 150, 145, 160, 155, 170, 165, 180, 175,
	],
};
