export type MarketData = {
	ticker: string;
	name: string;
	price: number;
	percentChange: number;
	absoluteChange: number;
	iconBackgroundColor?: string;
};

export type TabData = {
	label: string;
	data: MarketData[];
};
