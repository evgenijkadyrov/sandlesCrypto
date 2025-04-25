import { useState } from 'react';

import { Button } from '@/components/Button';
import { InvestmentTabs } from '@/components/Product/InvestmentTabs';

import { HEADER_DATA, INVESTMENT_TABS } from './config';
import { InvestmentContent } from './InvestmentContent';

import styles from './styles.module.css';

export function InvestmentSection() {
	const [activeTab, setActiveTab] = useState<string>(INVESTMENT_TABS[0].label);
	const activeContent = INVESTMENT_TABS.find(
		(tab) => tab.label === activeTab
	)?.content;

	return (
		<section className={styles.section}>
			<div className={styles.headerContainer}>
				<div className={styles.header}>{HEADER_DATA.title}</div>
				<Button size={'large'}>Get Started</Button>
			</div>

			<div className={styles.container}>
				<InvestmentTabs
					tabs={INVESTMENT_TABS}
					activeTab={activeTab}
					onTabChange={setActiveTab}
				/>

				<div className={styles.patternWrapper}>
					<img src={'/images/aboutUs-pattern.png'} alt="pattern" />
				</div>
			</div>

			{activeContent && (
				<InvestmentContent
					title={activeContent.title}
					subtitle={activeContent.subtitle}
					description={activeContent.description}
					imageSrc={activeContent.imageSrc}
					imageAlt={activeContent.imageAlt}
				/>
			)}
		</section>
	);
}
