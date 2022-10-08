import {getColl} from "../../core/db"
import RequestHandler from "../../core/utils/RequestHandler"

const handler = new RequestHandler({
	// useQs: false,
})

handler
	.get(async (req, res) => {
		try {
			console.log("[GET] - ", new Date().toLocaleString())

			const coll = await getColl("weather")
			const list = await coll.find({}).toArray()
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
			const {temp, humidity} = req.query

			console.log("[POST] - ", new Date().toLocaleString(), "temp", +temp, "humidity", +humidity)

			const coll = await getColl("weather")
			await coll.insertOne({temp: +temp, humidity: +humidity, createdAt: new Date()})
			res.json({
				success: true,
			})
		} catch (error) {
			console.error(`error`, error)
		}
	})

export default handler.handle
