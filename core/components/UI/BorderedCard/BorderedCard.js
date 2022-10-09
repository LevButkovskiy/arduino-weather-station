import styles from "./BorderedCard.module.scss"

export default function BorderedCard({children}) {
	return <div className={styles.BorderedCard}>{children}</div>
}
