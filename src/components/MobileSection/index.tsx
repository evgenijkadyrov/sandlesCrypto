import { QRCODE_TEXT, SUBTITLE, TITLE } from './config';
import { ContentBlock } from './ContactBlock';
import { QRCodeBlock } from './QrCodeBlock';

import styles from './styles.module.css';

export function MobileSection() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.contentContainer}>
					<ContentBlock title={TITLE} subtitle={SUBTITLE} />
					<QRCodeBlock qrCodeText={QRCODE_TEXT} />
				</div>
				<div className={styles.image}>
					<img src="/images/mobile-section.png" alt="Mobile Section" />
				</div>
			</div>
		</section>
	);
}
