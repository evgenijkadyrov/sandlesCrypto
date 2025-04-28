import styles from './styles.module.css';

type BenefitCardData = {
	iconSrc: string;
	iconAlt: string;
	title: string;
	description: string;
};

export const BENEFIT_CARDS: BenefitCardData[] = [
	{
		iconSrc: '/icons/whyUs/icon1.svg',
		iconAlt: 'Real-Time Trading Icon',
		title: 'Real-Time Trading',
		description:
			'Organically Grow The Holistic World View Of Disruptive Innovation Workplace Diversity Empowerment.',
	},
	{
		iconSrc: '/icons/whyUs/icon2.png',
		iconAlt: 'Create Wallet Icon',
		title: 'Easy To Create Wallet',
		description:
			'Organically Grow The Holistic World View Of Disruptive Innovation Workplace Diversity Empowerment.',
	},
	{
		iconSrc: '/icons/whyUs/icon3.svg',
		iconAlt: 'Safe & Secure Icon',
		title: 'Safe & Secure',
		description:
			'Organically Grow The Holistic World View Of Disruptive Innovation Workplace Diversity Empowerment.',
	},
	{
		iconSrc: '/icons/whyUs/icon4.svg',
		iconAlt: 'Super Fast KYC Icon',
		title: 'Super Fast KYC',
		description:
			'Organically Grow The Holistic World View Of Disruptive Innovation Workplace Diversity Empowerment.',
	},
	{
		iconSrc: '/icons/whyUs/icon5.svg',
		iconAlt: 'Send & Receive Icon',
		title: 'Send & Receive Anytime',
		description:
			'Organically Grow The Holistic World View Of Disruptive Innovation Workplace Diversity Empowerment.',
	},
	{
		iconSrc: '/icons/whyUs/icon6.svg',
		iconAlt: 'Reports & Analytics Icon',
		title: 'Reports & Analytics',
		description:
			'Organically Grow The Holistic World View Of Disruptive Innovation Workplace Diversity Empowerment.',
	},
];

export const TITLE = (
	<>
		Fully featured to buy, trade and invest in{' '}
		<span className={styles.colorText}>Skyflex</span>
	</>
);
