import _ from "lodash"
import {useEffect, useState} from "react"
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"

import {apiRequest} from "../core/utils/request"

export default function Page() {
	const [weather, setWeather] = useState([])

	useEffect(() => {
		apiRequest("/weatherData").then((res) => {
			if (res.success) {
				setWeather(_.get(res, "list", []))
			}
		})
	}, [])
	return (
		<div style={{width: "100vw", height: "100vh", padding: "10%"}}>
			<ResponsiveContainer width='100%' height='100%'>
				<LineChart
					width={500}
					height={300}
					data={weather.map((e, i) => ({name: e.createdAt + i, temp: e.temp}))}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type='monotone' dataKey='temp' stroke='#8884d8' activeDot={{r: 8}} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

Page.title = "Погода"
