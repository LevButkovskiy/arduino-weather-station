import WeatherChart from "../WeatherChart/WeatherChart"
import styles from "./WeatherCharts.module.scss"

const CHARTS = [
	{
		label: "Температура, °C",
		measure: "temp",
		color: "#8884d8",
	},
	{
		label: "Влажность, %",
		measure: "humidity",
		color: "#82ca9d",
	},
]
export default function WeatherCharts({weather}) {
	return (
		<div className={styles.WeatherCharts}>
			{CHARTS.map(({label, measure, color}) => (
				<div className={styles.chart} key={measure}>
					<WeatherChart weather={weather} label={label} measure={measure} color={color} />
				</div>
			))}
		</div>
	)
}
