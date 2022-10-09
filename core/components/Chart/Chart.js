import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"

import {dateFormatter} from "../../utils/formatters"
import BorderedCard from "../UI/BorderedCard/BorderedCard"
import styles from "./Chart.module.scss"

export default function Chart({data = [], measure = "", label = "", color = "", width = "100%", height = "100%"}) {
	return (
		<div className={styles.Chart} style={{width: width, height: height}}>
			<BorderedCard>
				<h3>{label}</h3>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart
						width={500}
						height={300}
						data={data.map((e, i) => ({...e, name: dateFormatter(e.createdAt)}))}
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
						<Line type='monotone' dataKey={measure} stroke={color} />
					</LineChart>
				</ResponsiveContainer>
			</BorderedCard>
		</div>
	)
}
