import { AddressInput } from '@/components/ContactUsSection/AdressInput';

import { TITLE } from './config';

import styles from './styles.module.css';

export const ContactUsSection = () => {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.title}>{TITLE}</div>
				<AddressInput />
			</div>
		</div>
	);
};
