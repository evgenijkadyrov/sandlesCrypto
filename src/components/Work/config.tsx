import { ColorText } from '@/components/ColorText';

export const FEATURES = [
	{
		title: 'More Than A Typical Crypto Wallet',
		description: 'Lorem Ipsum Dolor Sit Amet Consect Eturadipiscing Eiusmod',
		imageSrc: '/images/work/crypto.png',
		imageAlt: 'Crypto Wallet Illustration',
		imagePosition: 'bottom' as const,
	},
	{
		title: 'Secure Transactions Anytime',
		description: 'Lorem Ipsum Dolor Sit Amet Consect Eturadipiscing Eiusmod',
		imageSrc: '/images/work/phone.png',
		imageAlt: 'Secure Transaction Illustration',
		imagePosition: 'top' as const,
	},
	{
		title: 'Global Crypto Access',
		description: 'Lorem Ipsum Dolor Sit Amet Consect Eturadipiscing Eiusmod',
		imageSrc: '/images/work/money.png',
		imageAlt: 'Global Access Illustration',
		imagePosition: 'bottom' as const,
	},
];

export const TITLE = (
	<>
		Invest & Grow your crypto currency <ColorText>Portfolio</ColorText>{' '}
	</>
);
