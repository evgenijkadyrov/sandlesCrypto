export type InvestmentTabsProps = {
	tabs: { label: string; icon: string }[];
	activeTab: string;
	onTabChange: (label: string) => void;
};
