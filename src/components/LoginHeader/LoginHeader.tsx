import styles from "./LoginHeader.module.scss";
import { memo } from "react";
import FolderIcon from "@assets/FolderIcon.svg";

export function LoginHeader() {
	const firstName = "Филипп";
	const lastName = "Ашайкин";
	const userImg = lastName.charAt(0).concat(firstName.charAt(0));

	return (
		<header className={styles.header}>
			<div className={styles.header__userImg}>{userImg}</div>
			<h1 className={styles.header__title}>
				{lastName.concat(" ", firstName)}
			</h1>
			<span className={styles.header__linkContainer}>
				<a href="https://t.me/felix2d6" className={styles.header__link}>
					<img src={FolderIcon} alt="icon for personal link" />
					<span>Telegram</span>
				</a>
				<a href="https://github.com/d6felix" className={styles.header__link}>
					<img src={FolderIcon} alt="icon for personal link" />{" "}
					<span>GitHub</span>
				</a>
				<a
					href="https://hh.ru/resume/7fd12e42ff0af153d50039ed1f37616e324648"
					className={styles.header__link}
				>
					<img src={FolderIcon} alt="icon for personal link" />
					<span>Resume</span>
				</a>
			</span>
		</header>
	);
}

export default memo(LoginHeader);
