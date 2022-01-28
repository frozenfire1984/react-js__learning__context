import {useContext, useMemo, memo, useCallback} from "react";
import Header from './Header'
import Main from './Main'
//import Input from './Input'
import Footer from './Footer'
import {UserContext} from '../contexts/user-context'

const Input = () => {
  const {userName, setUserName} = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value)
  
  //some reason don't work
  /*const changeHandler = useCallback(
    (event) => setUserName(event.target.value),
    [userName,setUserName]
  )*/
  /*const value = useMemo(
    () => (userName),
    [userName]
  )*/
  
  console.log("msg from Input")
  
  return (
    <input type="text" value={userName} onChange={changeHandler} placeholder="user name" maxLength="20" />
  )
}

const Layout = ({children}) => {
  //const {userName, setUserName} = useContext(UserContext);
  console.log("msg from Layout")
  return (
    <main className="layout">
      <div className="panel">
        <Input/>
        {/*<button onClick={() => props.setUserName("Dana White")}>Change User</button>*/} {/*Lifting State up*/}
        {/*<button onClick={() => setUserName("Dana White")}>Change User</button>*/}
        {/*<div className="panel__content">{props.test}</div>*/}
      </div>
      <Header/>
      <Main
        children={children}
      />
      <Footer/>
    </main>
  )
};

//export default memo(Layout);
export default Layout;
