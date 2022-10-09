import styles from "./Container.module.scss"

export default function Container({children}) {
	return <div className={styles.Container}>{children}</div>
}
