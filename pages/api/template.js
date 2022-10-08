import {ObjectID, client, connection, dbName, getColl} from "../../core/db"
import RequestHandler from "../../core/utils/RequestHandler"

const handler = new RequestHandler({
	// useQs: false,
})

handler.get(async (req, res) => {
	try {
		await connection
		let stores = await getColl("test").find({})
		let result = await stores.toArray()
		res.json({
			list: result,
			count: await stores.count(),
		})
	} catch (error) {
		console.error(`error`, error)
	}
})

export default handler.handle
