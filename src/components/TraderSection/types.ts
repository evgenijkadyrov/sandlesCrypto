export type CryptoActionCardProps = {
	iconSrc: string;
	iconAlt: string;
	title: string;
	description: string;
};

export type CryptoInfoProps = {
	iconSrc: string;
	iconAlt: string;
	name: string;
	ticker: string;
	percentChange: number;
};

export type CryptoActionCardData = {
	iconSrc: string;
	iconAlt: string;
	title: string;
	description: string;
};

export type CryptoData = {
	iconSrc: string;
	iconAlt: string;
	name: string;
	ticker: string;
	percentChange: number;
};

export type CryptoPriceCardData = {
	cryptos: CryptoData[];
	price: string;
	holding: string;
	sparklineData: number[];
};
