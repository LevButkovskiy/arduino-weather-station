import BorderedCard from "../UI/BorderedCard/BorderedCard"
import styles from "./Measure.module.scss"

export default function Measure({label, value}) {
	return (
		<BorderedCard>
			<span className={styles.Measure}>
				{label}: <span className={styles.value}>{value}</span>
			</span>
		</BorderedCard>
	)
}
