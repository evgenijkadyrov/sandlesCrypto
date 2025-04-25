import { TabData } from './types';

import styles from './styles.module.css';

const INVESTMENT_TABS: TabData[] = [
	{
		label: 'Stock',
		icon: '/icons/stock.svg',
		content: {
			title: 'Invest Everything',
			subtitle: (
				<>
					<span className={styles.subtitleBold}>6.7%</span> Interest Rate
				</>
			),
			description:
				'Proactively Envisioned Multimedia Based Expertise And Cross-Media Growth Strategies. Seamlessly Visualize Quality Intellectual Capital Without Superior.',
			imageSrc: '/images/chart.png',
			imageAlt: 'Stock Charts',
		},
	},
	{
		label: 'US Stock',
		icon: '/icons/us-stock.svg',
		content: {
			title: 'Invest in US Markets',
			subtitle: (
				<>
					<span className={styles.subtitleBold}>7.2% </span> Interest Rate
				</>
			),
			description:
				'Proactively Envisioned Multimedia Based Expertise And Cross-Media Growth Strategies. Seamlessly Visualize Quality Intellectual Capital Without Superior.',
			imageSrc: '/images/chart.png',
			imageAlt: 'US Stock Charts',
		},
	},
	{
		label: 'FDs',
		icon: '/icons/fds.svg',
		content: {
			title: 'Fixed Deposits',
			subtitle: (
				<>
					<span className={styles.subtitleBold}>5.7% </span> Interest Rate
				</>
			),
			description:
				'Proactively Envisioned Multimedia Based Expertise And Cross-Media Growth Strategies. Seamlessly Visualize Quality Intellectual Capital Without Superior.',
			imageSrc: '/images/chart.png',
			imageAlt: 'FDs Charts',
		},
	},
];

const HEADER_DATA = {
	title:
		'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit',
	subtitle: 'Your Money...Your Choice',
	description:
		'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt',
};

export { HEADER_DATA, INVESTMENT_TABS };
