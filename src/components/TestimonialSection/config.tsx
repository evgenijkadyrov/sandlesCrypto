import styles from '@/components/TraderSection/styles.module.css';

import { TestimonialData } from './types';

export const TITLE = {
	title: (
		<>
			What our clients say <span className={styles.colorText}>about</span> us
		</>
	),
	description:
		'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit',
};

export const TESTIMONIALS: TestimonialData[] = [
	{
		avatarSrc: '/images/teastimonials/michael-scott.png',
		avatarAlt: 'Michael Scott Avatar',
		name: 'Michael Scott',
		role: '@Trader',
		rating: 5,
		review:
			'Phosfluorescently Engage Worldwide Methodologies With Web-Enabled Technology. Interactively Coordinate Collaborative Administrative Turnkey Channels Whereasfully Researched.',
	},
	{
		avatarSrc: '/images/teastimonials/sylvester-stallone.png',
		avatarAlt: 'Sylvester Stallone Avatar',
		name: 'Sylvester Stallone',
		role: '@Manager',
		rating: 5,
		review:
			'Phosfluorescently Engage Worldwide Methodologies With Web-Enabled Technology. Interactively Coordinate Collaborative Administrative Turnkey Channels Whereasfully Researched.',
	},
	{
		avatarSrc: '/images/teastimonials/sophie-moore.png',
		avatarAlt: 'Sophie Moore Avatar',
		name: 'Sophie Moore',
		role: '@Content Writer',
		rating: 5,
		review:
			'Phosfluorescently Engage Worldwide Methodologies With Web-Enabled Technology. Interactively Coordinate Collaborative Administrative Turnkey Channels Whereasfully Researched.',
	},
	{
		avatarSrc: '/images/teastimonials/john-carter.png',
		avatarAlt: 'John Carter Avatar',
		name: 'John Carter',
		role: '@Content Writer',
		rating: 5,
		review:
			'Phosfluorescently Engage Worldwide Methodologies With Web-Enabled Technology. Interactively Coordinate Collaborative Administrative Turnkey Channels Whereasfully Researched.',
	},
];
