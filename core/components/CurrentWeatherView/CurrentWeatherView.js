import _ from "lodash"

import {dateFormatter} from "../../utils/formatters"
import Measure from "../Measure/Measure"
import styles from "./CurrentWeatherView.module.scss"

export default function CurrentWeatherView({currentWeather}) {
	return (
		<div className={styles.CurrentWeatherView}>
			<Measure label={"Дата измерения"} value={dateFormatter(_.get(currentWeather, "createdAt"))} />
			<Measure label={"Температура"} value={_.get(currentWeather, "temp", 0)?.toFixed(0)} />
			<Measure label={"Влажность"} value={_.get(currentWeather, "humidity", 0)?.toFixed(0)} />
		</div>
	)
}
