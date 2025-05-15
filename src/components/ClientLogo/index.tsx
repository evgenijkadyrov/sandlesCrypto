import { LOGO_DATA } from '@/components/ClientLogo/config';

import styles from './styles.module.css';

export const ClientLogo = () => {
	return (
		<section className={styles.container}>
			{LOGO_DATA.map(({ path, alt, id }) => (
				<img src={path} alt={alt} key={id} />
			))}
		</section>
	);
};
