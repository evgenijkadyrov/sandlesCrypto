import { Button } from '../Button';

import { BUTTON_TEXT, ICONS, SUBTITLE, TITLE } from './config';

import styles from './styles.module.css';

export function HeroSection() {
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
				<h1 className={styles.title}>{TITLE}</h1>
			</div>
			<div className={styles.subtitleContainer}>
				<p className={styles.subtitle}>{SUBTITLE}</p>
				<Button
					variant="gray"
					size="large"
					className={styles.button}
					onClick={() => {}}
				>
					{BUTTON_TEXT}
				</Button>
			</div>
		</section>
	);
}
