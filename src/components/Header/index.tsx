import { Button } from '@/components/Button';
import { LOGO_TEXT, NAV_ITEMS } from '@/components/Header/config';
import { LOGIN_BUTTON_TEXT } from '@/components/Header/config';

import styles from './styles.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.imageLogo} src="/logo.webp" alt="logo" />
				<p>{LOGO_TEXT}</p>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					{NAV_ITEMS.map((item) => (
						<li key={item.label}>
							<a href={item.route} className={styles.navLink}>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<Button size="medium">{LOGIN_BUTTON_TEXT}</Button>
		</header>
	);
}
