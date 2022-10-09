import _ from "lodash"
import {useEffect, useState} from "react"

import CurrentWeatherView from "../core/components/CurrentWeatherView/CurrentWeatherView"
import Container from "../core/components/UI/Container/Container"
import WeatherCharts from "../core/components/WeatherCharts/WeatherCharts"
import {apiRequest} from "../core/utils/request"

export default function Page() {
	const [weather, setWeather] = useState([])
	const [currentWeather, setCurrentWeather] = useState({})

	useEffect(() => {
		apiRequest("/weatherData").then((res) => {
			if (res.success) {
				const list = _.get(res, "list", [])
				setWeather(list)
				setCurrentWeather(_.get(list, list?.length - 1))
			}
		})
	}, [])

	return (
		<Container>
			<h1>Погода</h1>
			<CurrentWeatherView currentWeather={currentWeather} />
			<WeatherCharts weather={weather} />
		</Container>
	)
}

Page.title = "Погода"
