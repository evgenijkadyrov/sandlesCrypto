import { useState } from 'react';

import { Button } from '@/components/Button';

import styles from './styles.module.css';

export function AddressInput() {
	const [address, setAddress] = useState<string>('');

	const handleSubmit = () => {
		if (address.trim()) {
			console.log('Submitted address:', address);
			setAddress('');
		}
	};

	return (
		<div className={styles.inputContainer}>
			<input
				type="text"
				value={address}
				onChange={(e) => setAddress(e.target.value)}
				placeholder="Enter your address"
				className={styles.input}
			/>
			<Button
				variant="primary"
				size="mediumL"
				onClick={handleSubmit}
				disabled={!address.trim()}
				className={styles.submitButton}
			>
				Submit
			</Button>
		</div>
	);
}
