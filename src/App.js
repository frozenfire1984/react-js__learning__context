import {createContext,useContext,useState,useEffect} from 'react';
import './styles/style.css';

const UserContext = createContext("Unknown");

const UserInfo = () => {
  const {userName} = useContext(UserContext);
  return (
    <div className="userInfo">
      {userName}
    </div>
  )
};

const Header = () => {
  return (
    <header>
      <div className="container">
        <UserInfo />
      </div>
    </header>
  )
};

const Main = ({children}) => {
  const {userName,userStatus} = useContext(UserContext);
  return (
    <main className="main">
      <div className="container">
        <div className="cols">
          <aside className="cols__aside">
            lorem*20
          </aside>
          <div className="cols__content">
            <div>
              <h2>Hello {userName}</h2>
              <h3>status {userStatus}</h3>
            </div>

            {/*<UserContext.Consumer>
              {userName => (
                <div>
                  <h2>Hello {userName}</h2>

                </div>
              )}
            </UserContext.Consumer>*/}

            {/*<UserContext.Consumer>
              {user => (
                <div>
                  <h2>Hello {user.name}</h2>
                  <span>status {user.status}</span>
                </div>
              )}
            </UserContext.Consumer>*/}
            {children}
          </div>
        </div>
      </div>
    </main>
  )
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ipsum?
      </div>
    </footer>
  )
};

const Layout = (props, {children}) => {
  const {setUserName} = useContext(UserContext);
  return (
    <main className="layout">
      <div className="panel">
        {/*<button onClick={() => props.setUserName("Dana White")}>Change User</button>*/} {/*Lifting State up*/}
        <button onClick={() => setUserName("Dana White")}>Change User</button>
        {/*<div className="panel__content">{props.test}</div>*/}
      </div>
      <Header/>
      <Main children={children}/>
      <Footer/>
    </main>
  )
};

const App = () => {
  const [userName, setUserName] = useState("John Smith");
  const userStatus = "loged";

  useEffect(() => {
    setTimeout(() => {
      setUserName("Joe Rogan");
    },5000)
  },[]);

  /*const user = {
    "name": "John Smith",
    "age": 30,
    "status": "loged"
  };*/

  return (
    <div className="app">
      <UserContext.Provider value={{userName, userStatus, setUserName}}>
        <Layout
          //setUserName={setUserName} //Lifting State up
          //test="foo bar"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quisquam, vitae! Ab, aut dolor ipsum
          laudantium magnam maiores molestiae mollitia natus neque nulla pariatur quo recusandae sapiente, totam voluptate
          voluptatem?
          </p>
        </Layout>
      </UserContext.Provider>
    </div>
  );
};

export default App;
