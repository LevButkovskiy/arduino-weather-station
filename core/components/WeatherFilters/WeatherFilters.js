import {Form, Select} from "antd"
import _ from "lodash"

import {PERIODS} from "../../constants"
import BorderedCard from "../UI/BorderedCard/BorderedCard"

export default function WeatherFilters({filters, setFilters}) {
	return (
		<BorderedCard>
			<Form layout='vertical'>
				<Form.Item label='Период'>
					<Select value={_.get(filters, "period")} onChange={(period) => setFilters((prev) => ({...prev, period}))}>
						{Object.keys(PERIODS).map((key) => (
							<Select.Option key={key} value={key}>
								{PERIODS[key]}
							</Select.Option>
						))}
					</Select>
				</Form.Item>
			</Form>
		</BorderedCard>
	)
}
