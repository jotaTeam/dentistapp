import { adminTypes } from "../../../datahelpers/types"

export const adminReducer = (state = {}, action) => {
	const { type, payload } = action

	console.log(type)
	console.log(payload)

	switch (action.type) {
		case adminTypes.setInitInfo:
			console.log("setinfo")
			return {
				...action.payload,
			}

		case adminTypes.getAllEmergencies:
			return {
				...state,
				...action.payload,
			}
		case adminTypes.checkEmergency:
			return {
				...action.payload,
			}
		case adminTypes.closeEmergency:
			return {
				...action.payload,
			}
		case adminTypes.getDateList:
			return {
				...action.payload,
			}
		case adminTypes.confirmDate:
			return {
				...action.payload,
			}
		case adminTypes.deleteDate:
			return {
				...action.payload,
			}

		default:
			return
	}
}
