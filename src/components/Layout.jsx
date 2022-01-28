import {useContext} from "react";
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout = ({children}) => {
  //const {setUserName} = useContext(UserContext);
  return (
    <main className="layout">
      <div className="panel">
        {/*<button onClick={() => props.setUserName("Dana White")}>Change User</button>*/} {/*Lifting State up*/}
        {/*<button onClick={() => setUserName("Dana White")}>Change User</button>*/}
        {/*<div className="panel__content">{props.test}</div>*/}
      </div>
      <Header/>
      <Main children={children}/>
      <Footer/>
    </main>
  )
};

export default Layout;
