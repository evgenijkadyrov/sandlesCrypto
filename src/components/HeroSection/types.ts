export type HeroSectionProps = {
	title?: string;
	subtitle?: string;
	buttonText?: string;
	onButtonClick?: () => void;
};

export type Icon = {
	src: string;
	alt: string;
	className: string;
};
