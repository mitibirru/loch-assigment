'use client';

import styles from './SignUpSection.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpSection = () => {
	const router = useRouter();
	const [email, setEmail] = useState<string>();
	const [error, setError] = useState(false);

	const handleClick = () => {
		if (!email || !email?.match(validRegex)) {
			setError(true);
			return;
		}

		setError(false);
		router.push('https://app.loch.one/welcome');
	};

	return (
		<div className={styles['sign-up-card-wrapper']}>
			<div className={styles['sign-up-card']}>
				<h3 className={styles['sign-up-card-heading']}>
					Sign up for
					<br />
					exclusive access.
				</h3>
				<div className={styles['sign-up-card-form']}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
						<input
							className={styles['sign-up-card-form-input']}
							type="email"
							placeholder="Your email address"
							onChange={e => setEmail(e.target.value)}
							style={{ border: error ? '1px solid red' : '1px solid #e5e5e6' }}
						/>
						{error ? <span style={{ color: 'red', fontSize: '12px', fontWeight: '600', textAlign: 'center' }}>Please enter a valid email</span> : null}
					</div>
					<button onClick={handleClick} className={styles['sign-up-card-form-button']}>
						Get Started
					</button>
					<p className={styles['sign-up-card-form-button-label']}>You’ll receive an email with an invite link to join.</p>
				</div>
			</div>
		</div>
	);
};

export default SignUpSection;
