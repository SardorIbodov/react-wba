import { StudentList } from "./context";

export const Context = ({children}) => {
	return <StudentList>
		{children}
	</StudentList>
}