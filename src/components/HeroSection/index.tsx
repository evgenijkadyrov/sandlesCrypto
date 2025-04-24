import { HeroSectionProps } from '@/components/HeroSection/types';

import { Button } from '../Button';

import {
	DEFAULT_BUTTON_TEXT,
	DEFAULT_SUBTITLE,
	DEFAULT_TITLE, ICONS,
} from './config';

import styles from './styles.module.css';


function HeroSection({
	title = DEFAULT_TITLE,
	subtitle = DEFAULT_SUBTITLE,
	buttonText = DEFAULT_BUTTON_TEXT,
	onButtonClick,
}: HeroSectionProps) {
	return (
		<section className={styles.hero}>
			{ICONS.map((icon) => (
				<img
					key={icon.src}
					src={icon.src}
					alt={icon.alt}
					className={icon.className}
				/>
			))}
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>{title}</h1>
			</div>
			<div className={styles.subtitleContainer}>
				<p className={styles.subtitle}>{subtitle}</p>
				<Button
					variant="gray"
					size="large"
					className={styles.button}
					onClick={onButtonClick}
				>
					{buttonText}
				</Button>
			</div>
		</section>
	);
}

export { HeroSection };
