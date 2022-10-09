import dayjs from "dayjs"

export const dateFormatter = (d) => {
	const date = dayjs(d, "YYYY-MM-DDTHH:MM:SS").format("DD.MM HH:mm")
	return date
}
