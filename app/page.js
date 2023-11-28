import styles from './page.module.css';
import PasswordGenerator from '@/components/passwordGenerator';

export default function Home() {
	return (
		<main className={styles.main}>
			<PasswordGenerator />
		</main>
	)
}
