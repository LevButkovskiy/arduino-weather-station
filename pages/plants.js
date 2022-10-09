import _ from "lodash"
import {useEffect, useState} from "react"

import PlantsCharts from "../core/components/PlantsCharts/PlantsCharts"
import Container from "../core/components/UI/Container/Container"
import WeatherFilters from "../core/components/WeatherFilters/WeatherFilters"
import {apiRequest} from "../core/utils/request"

export default function Page({title}) {
	const [plantsData, setPlantsData] = useState([])
	const [currentWeather, setCurrentWeather] = useState({})
	const [filters, setFilters] = useState({period: "1d"})

	useEffect(() => {
		apiRequest("/plantsData", {filters}).then((res) => {
			if (res.success) {
				const list = _.get(res, "list", [])
				setPlantsData(list)
				setCurrentWeather(_.get(list, list?.length - 1))
			}
		})
	}, [filters])

	return (
		<Container>
			<h1>Растения</h1>
			<WeatherFilters filters={filters} setFilters={setFilters} />
			<PlantsCharts plantsData={plantsData} />
		</Container>
	)
}

Page.title = "Растения"
