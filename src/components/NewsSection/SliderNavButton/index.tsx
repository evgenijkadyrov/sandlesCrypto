import styles from './styles.module.css';

type SliderNavButtonProps = {
	direction: 'prev' | 'next';
	onClick: () => void;
};

export function SliderNavButton({ direction, onClick }: SliderNavButtonProps) {
	return (
		<button
			className={direction === 'prev' ? styles.prevButton : styles.nextButton}
			onClick={onClick}
		>
			<img
				src={`/icons/arrow-${direction}.png`}
				alt={`${direction} arrow`}
				className={styles.arrow}
			/>
		</button>
	);
}
