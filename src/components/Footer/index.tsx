import {
	ADDRESS,
	COLUMNS, COPYRIGHT,
	DISCLAIMER,
	SLOGAN,
	SOCIAL_ICONS,
} from './config';

import styles from './styles.module.css';


export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.topSection}>
					<div className={styles.brand}>
						<div className={styles.logo}>
							<img className={styles.imageLogo} src="/logo.webp" alt="logo" />
							<p>Skyflex</p>
						</div>
						<p className={styles.slogan}>{SLOGAN}</p>
					</div>
					<div className={styles.social}>
						<p className={styles.socialTitle}>Follow Us:</p>
						<div className={styles.socialIcons}>
							{SOCIAL_ICONS.map((icon) => (
								<a
									key={icon.src}
									href={icon.href}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.socialLink}
								>
									<img
										src={icon.src}
										alt={icon.alt}
										className={styles.socialIcon}
									/>
								</a>
							))}
						</div>
					</div>
				</div>
				<div className={styles.columns}>
					{COLUMNS.map((column) => (
						<div key={column.title} className={styles.column}>
							<h3 className={styles.columnTitle}>{column.title}</h3>
							<ul className={styles.linkList}>
								{column.links.map((link) => (
									<li key={link.label}>
										<a href={link.href} className={styles.link}>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
					<div className={styles.column}>
						<h3 className={styles.columnTitle}>{ADDRESS.title}</h3>
						<p className={styles.addressText}>{ADDRESS.text}</p>
						<p className={styles.addressEmail}>
							Or Case Of Any Query, Please Mail{' '}
							<a href={ADDRESS.emailHref} className={styles.emailLink}>
								{ADDRESS.email}
							</a>
						</p>
						<div className={styles.disclaimer}>
							<p>{DISCLAIMER}</p>
						</div>
					</div>
				</div>
				<div className={styles.bottomSection}>
					<p className={styles.copyright}>{COPYRIGHT}</p>
				</div>
			</div>
		</footer>
	);
}
