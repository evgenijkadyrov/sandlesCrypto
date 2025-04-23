import type { NavItem } from '@/components/Header/types';
import { ROUTES } from '@/constants/routers';

export const LOGO_TEXT = 'Skyflex';
export const LOGIN_BUTTON_TEXT = 'Login';
export const NAV_ITEMS: NavItem[] = [
	{ label: 'Home', route: ROUTES.HOME },
	{ label: 'Contact', route: ROUTES.CONTACT },
	{ label: 'Pricing', route: ROUTES.PRICING },
	{ label: 'About', route: ROUTES.ABOUT },
	{ label: 'Pages', route: ROUTES.PAGES },
];
