import { TestimonialCardProps } from '../types';

import styles from './styles.module.css';

export function TestimonialCard({
	avatarSrc,
	avatarAlt,
	name,
	role,
	rating,
	review,
}: TestimonialCardProps) {
	return (
		<div className={styles.card}>
			<img src={avatarSrc} alt={avatarAlt} className={styles.avatar} />
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.nameRole}>
						<h3 className={styles.name}>{name}</h3>
						<p className={styles.role}>{role}</p>
					</div>
					<div className={styles.rating}>
						{Array(rating)
							.fill(0)
							.map((_, index) => (
								<span key={index} className={styles.star}>
									★
								</span>
							))}
					</div>
				</div>
				<p className={styles.review}>{review}</p>
			</div>
		</div>
	);
}
