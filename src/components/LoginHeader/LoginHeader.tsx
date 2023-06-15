import classNames from "classnames";
import styles from "./LoginHeader.module.scss";
import { useMemo } from "react";
import FolderIcon from "@assets/FolderIcon.svg";

export function LoginHeader() {
	const firstName = "Филипп";
	const lastName = "Ашайкин";
	const userImg = useMemo(() => {
		return lastName.charAt(0).concat(firstName.charAt(0));
	}, []);

	return (
		<header className={classNames(styles.header)}>
			<div className={classNames(styles.header__userImg)}>{userImg}</div>
			<h1 className={classNames(styles.header__title)}>
				{lastName.concat(" ", firstName)}
			</h1>
			<img src={FolderIcon} alt="icon for personal link" />
			<a
				href="https://t.me/felix2d6"
				className={classNames(styles.header__link)}
			>
				Telegram
			</a>
			<img src={FolderIcon} alt="icon for personal link" />
			<a
				href="https://github.com/d6felix"
				className={classNames(styles.header__link)}
			>
				GitHub
			</a>
			<img src={FolderIcon} alt="icon for personal link" />
			<a
				href="https://hh.ru/resume/7fd12e42ff0af153d50039ed1f37616e324648"
				className={classNames(styles.header__link)}
			>
				Resume
			</a>
		</header>
	);
}

export default LoginHeader;
