import { ReactNode } from 'react';

export type TabContent = {
	title: string;
	subtitle: ReactNode;
	description: string;
	imageSrc: string;
	imageAlt: string;
};

export type TabData = {
	label: string;
	icon: string;
	content: TabContent;
};
