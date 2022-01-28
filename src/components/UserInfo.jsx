import {useContext, memo, useMemo} from "react";
import {UserContext} from '../contexts/user-context'

const UserInfo = () => {
  const {userName} = useContext(UserContext);
  
  //some reason don't work
  /*const value = useMemo(
    () => (userName),
    [userName]
  )*/
  console.log("msg from UserInfo")
  
  return (
    <div className="userInfo">
      {userName}
    </div>
  )
};

//export default memo(UserInfo);
export default UserInfo;
