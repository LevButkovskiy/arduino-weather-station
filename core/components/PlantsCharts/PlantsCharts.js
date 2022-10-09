import _ from "lodash"

import CurrentPlantView from "../CurrentPlantView/CurrnetPlantView"
import WeatherChart from "../WeatherChart/WeatherChart"
import styles from "./PlantsCharts.module.scss"

const PLANTS_NAMES = {
	bamboo: "Бамбук",
}

export default function PlantsCharts({plantsData}) {
	const plantsCharts = _.uniq((plantsData || []).map((e) => e.plant))

	return (
		<div className={styles.PlantsCharts}>
			{plantsCharts.map((plant) => {
				const plantData = plantsData.filter((e) => e.plant === plant)
				return (
					<div className={styles.chart} key={plant}>
						<CurrentPlantView currentPlant={_.get(plantData, plantData?.length - 1)} />
						<WeatherChart weather={plantData} label={_.get(PLANTS_NAMES, plant, plant)} measure={"humidity"} color={"#82ca9d"} />
					</div>
				)
			})}
		</div>
	)
}
