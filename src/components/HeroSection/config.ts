import { Icon } from '@/components/HeroSection/types';

import styles from './styles.module.css';

export const DEFAULT_TITLE = 'Welcome to Our Platform';
export const DEFAULT_SUBTITLE =
	'Discover the best solutions for your needs with our services.';
export const DEFAULT_BUTTON_TEXT = 'Get Started';

export const ICONS: Icon[] = [
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
