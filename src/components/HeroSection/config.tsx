import { ColorText } from '@/components/ColorText';
import { Icon } from '@/components/HeroSection/types';

import styles from './styles.module.css';

export const TITLE = (
	<>
		Build Wealth <ColorText>Automatically</ColorText> <br />
		With Skyflex
	</>
);
export const SUBTITLE =
	'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit';
export const BUTTON_TEXT = 'Get Started';

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
