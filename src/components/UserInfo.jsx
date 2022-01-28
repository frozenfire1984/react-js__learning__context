import {useContext} from "react";
import UserContext from './../contexts/user-context'

const UserInfo = () => {
  const userName = useContext(UserContext);
  return (
    <div className="userInfo">
      {userName}
    </div>
  )
};

export default UserInfo;
