import _ from "lodash"

import Chart from "../Chart/Chart"
import CurrentPlantView from "../CurrentPlantView/CurrnetPlantView"
import BorderedCard from "../UI/BorderedCard/BorderedCard"
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
						<BorderedCard>
							<h3>{_.get(PLANTS_NAMES, plant, plant)}</h3>
							<CurrentPlantView currentPlant={_.get(plantData, plantData?.length - 1)} />
							<Chart data={plantData} measure={"humidity"} color={"#82ca9d"} />
						</BorderedCard>
					</div>
				)
			})}
		</div>
	)
}
