import {getColl} from "../../core/db"
import RequestHandler from "../../core/utils/RequestHandler"

const handler = new RequestHandler({
	// useQs: false,
})

handler
	.get(async (req, res) => {
		try {
			const date = new Date()
			const {filters} = req.query

			console.log("[GET] -", date.toLocaleString(), JSON.stringify(filters))

			let filter = {}

			if (Object.keys(filters).length) {
				switch (filters.period) {
					case "3h": {
						filter.createdAt = {$gte: new Date(new Date() - 1000 * 60 * 60 * 3)}
						break
					}
					case "1d": {
						filter.createdAt = {$gte: new Date(new Date() - 1000 * 60 * 60 * 24)}
						break
					}
					case "7d": {
						filter.createdAt = {$gte: new Date(new Date() - 1000 * 60 * 60 * 24 * 7)}
						break
					}
					case "1m": {
						filter.createdAt = {$gte: new Date(new Date() - 1000 * 60 * 60 * 24 * 30)}
						break
					}
				}
			}
			const coll = await getColl("plants")
			const list = await coll
				.aggregate([
					{
						$match: filter,
					},
					// {
					// 	$project: {
					// 		day: {$dayOfMonth: "$createdAt"},
					// 		hour: {$hour: "$createdAt"},
					// 		month: {$month: "$createdAt"},
					// 	},
					// },
					{
						$sort: {createdAt: 1},
					},
				])
				.toArray()
			res.json({
				success: true,
				list: list,
			})
		} catch (error) {
			console.error(`error`, error)
		}
	})
	.post(async (req, res) => {
		try {
			const {plant, humidity} = req.query

			console.log("[POST] -", new Date().toLocaleString(), "plant", plant, "humidity", +humidity)

			const coll = await getColl("plants")
			await coll.insertOne({plant: plant, humidity: +humidity, createdAt: new Date()})
			res.json({
				success: true,
			})
		} catch (error) {
			console.error(`error`, error)
		}
	})

export default handler.handle
