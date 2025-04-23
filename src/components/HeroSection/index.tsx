import { Button } from '../Button';
import styles from './styles.module.css';
import { HeroSectionProps } from '@/components/HeroSection/types';

type Icon = {
	src: string;
	alt: string;
	className: string;
};

const DEFAULT_TITLE = 'Welcome to Our Platform';
const DEFAULT_SUBTITLE =
	'Discover the best solutions for your needs with our services.';
const DEFAULT_BUTTON_TEXT = 'Get Started';

const ICONS: Icon[] = [
	{
		src: '/icons/pattern.png',
		alt: 'Pattern Icon',
		className: styles.iconTopLeft,
	},
	{ src: '/icons/coin.png', alt: 'Coin Icon', className: styles.iconTopRight },
	{
		src: '/icons/chart.png',
		alt: 'Chart Icon',
		className: styles.iconBottomLeft,
	},
	{
		src: '/icons/user-surprise.png',
		alt: 'User Surprise Icon',
		className: styles.iconBottomRight,
	},
];

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
