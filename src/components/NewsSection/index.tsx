import Slider from 'react-slick';

import { FEATURES, TITLE } from './config';
import { FeatureCard } from './FeatureCard';
import { SliderNavButton } from './SliderNavButton';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';

export function NewsSection() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: <SliderNavButton direction="prev" onClick={() => {}} />,
		nextArrow: <SliderNavButton direction="next" onClick={() => {}} />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>{TITLE}</h2>
			<div className={styles.sliderContainer}>
				<Slider {...settings}>
					{FEATURES.map(
						({ title, description, imageSrc, imageAlt, author }) => (
							<div key={title} className={styles.slide}>
								<FeatureCard
									title={title}
									description={description}
									imageSrc={imageSrc}
									imageAlt={imageAlt}
									author={author}
								/>
							</div>
						)
					)}
				</Slider>
			</div>
		</section>
	);
}
