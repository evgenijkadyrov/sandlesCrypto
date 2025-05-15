import { BUTTONS, DESCRIPTION } from '@/components/AboutUs/config';
import { MarketTabs } from '@/components/AboutUs/MarketTab';
import { Button } from '@/components/Button';

import styles from './styles.module.css';

export function AboutUs() {
	const handleButtonClick = (text: string) => {
		console.log(`${text} button clicked`);
	};

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.description}>
					<p className={styles.descriptionTitle}>{DESCRIPTION.title}</p>
					<p className={styles.descriptionText}>{DESCRIPTION.text}</p>
					<div className={styles.buttonContainer}>
						{BUTTONS.map((button) => (
							<Button
								key={button.text}
								variant={button.variant}
								size="mediumL"
								onClick={() => handleButtonClick(button.text)}
							>
								{button.text}
							</Button>
						))}
					</div>
				</div>
				<div className={styles.table}>
					<img src="/images/aboutUs-pattern.png" alt="About Us pattern" />
					<MarketTabs />
				</div>
			</div>
		</section>
	);
}
