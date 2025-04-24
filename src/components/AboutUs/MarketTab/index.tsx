import { useState } from 'react';

import { MarketRow } from '../MarketRow';
import { Tab } from '../Tab';

import { TABS } from './config';

import styles from './styles.module.css';

export function MarketTabs() {
	const [activeTab, setActiveTab] = useState<string>(TABS[0].label);

	return (
		<section className={styles.marketTabs}>
			<div className={styles.container}>
				<div className={styles.tabs}>
					{TABS.map((tab) => (
						<Tab
							key={tab.label}
							label={tab.label}
							isActive={activeTab === tab.label}
							onClick={() => setActiveTab(tab.label)}
						/>
					))}
				</div>
				<div className={styles.table}>
					{TABS.find((tab) => tab.label === activeTab)?.data.map(
						(
							{
								ticker,
								name,
								absoluteChange,
								percentChange,
								price,
								iconBackgroundColor,
							},
							index
						) => (
							<MarketRow
								key={index}
								ticker={ticker}
								name={name}
								price={price}
								percentChange={percentChange}
								absoluteChange={absoluteChange}
								iconBackgroundColor={iconBackgroundColor}
								isEven={index % 2 === 0}
							/>
						)
					)}
				</div>
			</div>
		</section>
	);
}
