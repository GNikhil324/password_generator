import { Flex, TextField } from '@radix-ui/themes';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div>
				<Flex>
					<TextField.Root>
						<TextField.Input placeholder="Search the docs…" size="3" />
						<TextField.Slot pr="3">
							{/* <IconButton size="2" variant="ghost">
								<DotsHorizontalIcon height="16" width="16" />
							</IconButton> */}
						</TextField.Slot>
					</TextField.Root>
				</Flex>

			</div>
		</main>
	)
}
