import { useReducer, useEffect } from "react"
import { adminTypes } from "../../../datahelpers/types"
import { adminReducer } from "../reducer/adminReducer"
import { adminContext } from "./adminContext"

const adminObject = {
	id: "",
	name: "",
	surnames: "",
	phone: "",
	medicalInfo: {
		allergy: false,
		descriptionAllergy: "",
		pathology: false,
		descriptionPathology: "",
	},
	simptom: {
		bleeding: false,
		pain: false,
		dental_movility: false,
		ulcer: false,
	},
	cause: {
		cavity: false,
		fracture: false,
		gums_problems: false,
		oral_hygiene: false,
	},
}

const initValue = () => {}

const AdminContextProvider = ({ children }) => {
	const [adminInfo, dispatch] = useReducer(adminReducer, {}, initValue)

	useEffect(() => {
		console.log("el use effect del provider")
		dispatch({
			type: adminTypes.setInitInfo,
			payload: adminObject,
		})
	}, [])

	return (
		<adminContext.Provider value={{ adminInfo, dispatch }}>
			{children}
		</adminContext.Provider>
	)
}

export default AdminContextProvider
