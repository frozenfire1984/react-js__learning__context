import {memo} from 'react'
import UserInfo from './UserInfo'

const Header = () => {
  console.log("msg from Header")
  return (
    <header>
      <div className="container">
        <UserInfo />
      </div>
    </header>
  )
};

export default memo(Header);
