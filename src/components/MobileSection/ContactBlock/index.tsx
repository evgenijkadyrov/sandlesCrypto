import { ReactElement } from 'react';

import styles from './styles.module.css';

type ContentBlockProps = {
	title: ReactElement;
	subtitle: string;
};

export function ContentBlock({ title, subtitle }: ContentBlockProps) {
	return (
		<>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.subtitle}>{subtitle}</p>
		</>
	);
}
