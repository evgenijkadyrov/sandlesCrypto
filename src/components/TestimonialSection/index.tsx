import { TestimonialCard } from '@/components/TestimonialSection/TestimonialCard';

import { TESTIMONIALS, TITLE } from './config';

import styles from './styles.module.css';

export const TestimonialSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.headerContainer}>
					<h3 className={styles.title}>{TITLE.title}</h3>
					<p className={styles.description}>{TITLE.description}</p>
				</div>
				<div className={styles.cardContainer}>
					{TESTIMONIALS.map((testimonial) => (
						<TestimonialCard
							key={testimonial.name}
							avatarSrc={testimonial.avatarSrc}
							avatarAlt={testimonial.avatarAlt}
							name={testimonial.name}
							role={testimonial.role}
							rating={testimonial.rating}
							review={testimonial.review}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
