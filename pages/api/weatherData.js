import {getColl} from "../../core/db"
import RequestHandler from "../../core/utils/RequestHandler"

const handler = new RequestHandler({
	// useQs: false,
})

handler.post(async (req, res) => {
	try {
		const {temp, humidity} = req.query

		console.log("[POST] - ", new Date().toLocaleString(), "temp", temp, "humidity", humidity)

		const coll = await getColl("weather")
		await coll.insertOne({temp, humidity, createdAt: new Date()})
		res.json({
			success: true,
		})
	} catch (error) {
		console.error(`error`, error)
	}
})

export default handler.handle