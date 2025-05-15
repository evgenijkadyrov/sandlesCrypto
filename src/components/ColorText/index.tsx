import styles from './styles.module.css';

export const ColorText = ({ children }: { children: string }) => {
	return <span className={styles.colorText}>{children}</span>;
};
