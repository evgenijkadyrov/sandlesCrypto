import clsx from 'clsx';

import { Button } from '@/components/Button';
import { HEADER_DATA } from '@/components/Product/config';

import { InvestmentTabsProps } from './types';

import styles from './styles.module.css';

export function InvestmentTabs({
	tabs,
	activeTab,
	onTabChange,
}: InvestmentTabsProps) {
	return (
		<div className={styles.tabsContainer}>
			<div className={styles.contentContainer}>
				<h3 className={styles.title}>{HEADER_DATA.subtitle}</h3>
				<p className={styles.description}>{HEADER_DATA.description}</p>
			</div>
			<div className={styles.tabs}>
				{tabs.map((tab) => (
					<Button
						key={tab.label}
						className={clsx({
							[styles.tabActive]: activeTab === tab.label,
							[styles.tab]: activeTab !== tab.label,
						})}
						onClick={() => onTabChange(tab.label)}
					>
						{activeTab === tab.label && (
							<img
								src={tab.icon}
								alt={`${tab.label} icon`}
								className={styles.tabIcon}
							/>
						)}
						{tab.label}
					</Button>
				))}
			</div>
		</div>
	);
}
