import _ from "lodash"

import {dateFormatter} from "../../utils/formatters"
import Measure from "../Measure/Measure"
import styles from "./CurrentPlantView.module.scss"

export default function CurrentPlantView({currentPlant}) {
	return (
		<div className={styles.CurrentPlantView}>
			<Measure label={"Дата измерения"} value={dateFormatter(_.get(currentPlant, "createdAt"))} />
			<Measure label={"Влажность"} value={_.get(currentPlant, "humidity", 0)?.toFixed(0)} />
		</div>
	)
}
