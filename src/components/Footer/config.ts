import { Column, SocialIcon } from 'src/components/Footer/types';

export const COLUMNS: Column[] = [
	{
		title: 'Company',
		links: [
			{ label: 'Home', href: '#' },
			{ label: 'About', href: '#' },
			{ label: 'Contact', href: '#' },
			{ label: 'Blog', href: '#' },
			{ label: 'Blog Post', href: '#' },
			{ label: 'Pricing', href: '#' },
			{ label: 'Pricing Single', href: '#' },
			{ label: 'Tokens', href: '#' },
			{ label: 'Token Single', href: '#' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ label: 'Privacy Policy', href: '#' },
			{ label: 'Terms & Conditions', href: '#' },
			{ label: 'Wallet Terms', href: '#' },
			{ label: 'Borrow Terms', href: '#' },
			{ label: 'Earn Terms', href: '#' },
			{ label: 'Exchange Terms', href: '#' },
			{ label: 'Nexco Card Terms', href: '#' },
			{ label: 'Affiliate Terms', href: '#' },
			{ label: 'Cookies Policy', href: '#' },
		],
	},
	{
		title: 'Skyflex',
		links: [
			{ label: 'What is Skyflex', href: '#' },
			{ label: 'Bitcoin', href: '#' },
			{ label: 'Ether', href: '#' },
			{ label: 'XRP', href: '#' },
			{ label: 'Tether', href: '#' },
			{ label: 'EOS', href: '#' },
			{ label: 'BAT', href: '#' },
			{ label: 'Chainlink', href: '#' },
		],
	},
];

export const SOCIAL_ICONS: SocialIcon[] = [
	{ src: '/icons/twitter.svg', alt: 'Twitter', href: 'https://twitter.com' },
	{ src: '/icons/facebook.svg', alt: 'Facebook', href: 'https://facebook.com' },
	{
		src: '/icons/instagram.svg',
		alt: 'Instagram',
		href: 'https://instagram.com',
	},
	{ src: '/icons/redit.svg', alt: 'Instagram', href: '#' },
	{ src: '/icons/youtube.svg', alt: 'YouTube', href: 'https://youtube.com' },
];

export const ADDRESS = {
	title: 'Registered Office Address',
	text: 'Awelanc Innovations India LIMITED [CIN No. U7044848], Opposite Doordarshan T.V. Tower, Drive-In Road, Thaltej, NY 380054',
	email: '011 85444 00025',
	emailHref: 'mailto:trade@cryptopin.com',
};

export const DISCLAIMER =
	'Trading in Cryptocurrencies Are Subject To Market, Technical And Legal Risks. The Prices Fluctuate Based On Local Demand And Supply';

export const SLOGAN =
	'Completely Synergize Resource Taxing Niche Markets. Professionally Cultivate Service With Robust Ideas, Dynamically.';

export const COPYRIGHT =
	'© CryptoPin | Designed By VictorFlow Templates - Powered By Webflow';
