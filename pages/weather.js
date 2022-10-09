import _ from "lodash"
import {useEffect, useState} from "react"

import CurrentWeatherView from "../core/components/CurrentWeatherView/CurrentWeatherView"
import Container from "../core/components/UI/Container/Container"
import WeatherCharts from "../core/components/WeatherCharts/WeatherCharts"
import WeatherFilters from "../core/components/WeatherFilters/WeatherFilters"
import {apiRequest} from "../core/utils/request"

export default function Page({title}) {
	const [weather, setWeather] = useState([])
	const [currentWeather, setCurrentWeather] = useState({})
	const [filters, setFilters] = useState({period: "1d"})

	useEffect(() => {
		apiRequest("/weatherData", {filters}).then((res) => {
			if (res.success) {
				const list = _.get(res, "list", [])
				setWeather(list)
				setCurrentWeather(_.get(list, list?.length - 1))
			}
		})
	}, [filters])

	return (
		<Container>
			<h1>Погода</h1>
			<CurrentWeatherView currentWeather={currentWeather} />
			<WeatherFilters filters={filters} setFilters={setFilters} />
			<WeatherCharts weather={weather} />
		</Container>
	)
}

Page.title = "Погода"
