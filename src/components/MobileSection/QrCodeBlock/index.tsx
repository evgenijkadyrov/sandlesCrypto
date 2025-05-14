import styles from './styles.module.css';

type QRCodeBlockProps = {
	qrCodeText: string;
};

export function QRCodeBlock({ qrCodeText }: QRCodeBlockProps) {
	return (
		<div className={styles.qrCodeContainer}>
			<div className={styles.qrCode}>
				<img
					src="/images/qrcode.png"
					alt="QR Code"
					className={styles.qrImage}
				/>
				<div className={styles.qrLabel}>{qrCodeText}</div>
			</div>
			<div className={styles.operations}>
				<img
					src="/icons/android.png"
					alt="Android Icon"
					className={styles.icon}
				/>
				<img
					src="/icons/app-store.png"
					alt="App Store Icon"
					className={styles.icon}
				/>
			</div>
		</div>
	);
}
