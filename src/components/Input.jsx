import {useContext, useMemo, memo, useCallback} from "react";
import {UserContext} from "../contexts/user-context";

//don't use so far!

const Input = () => {
	const {userName, setUserName} = useContext(UserContext);
	//const changeHandler = (event) => setUserName(event.target.value)
	
	//some reason don't work
	const changeHandler = useCallback(
		(event) => setUserName(event.target.value),
		[userName]
	)
	/*const value = useMemo(
		() => (userName),
		[userName]
	)*/
	
	console.log("msg from Input")
	
	return (
		<input type="text" value={userName} onChange={changeHandler} placeholder="user name" maxLength="20" />
	)
}

export default memo(Input);