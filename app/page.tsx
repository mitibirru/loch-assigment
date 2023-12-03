import styles from './page.module.css';
import SignUpSection from '@/components/sign-up-section';
import Banner from '@/components/banner';

export default function Home() {
	return (
		<main className={styles['main']}>
			<Banner />
			<SignUpSection />
		</main>
	);
}
