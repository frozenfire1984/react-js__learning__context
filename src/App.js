import {createContext,useContext} from 'react';
import './styles/style.css';

const UserContext = createContext("Unknown");

const UserInfo = () => {
  const user = useContext(UserContext);
  return (
    <div className="userInfo">
      {user.name}
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
  const {user} = useContext(UserContext);
  return (
    <main className="main">
      <div className="container">
        <div className="cols">
          <aside className="cols__aside">
            lorem*20
          </aside>
          <div className="cols__content">
            {/*<h2>Hello {user.name}</h2>*/}

            <UserContext.Consumer>
              {user => (
                <div>
                  <h2>Hello {user.name}</h2>
                  <span>status {user.status}</span>
                </div>
              )}
            </UserContext.Consumer>
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

const Layout = ({children}) => {
  return (
    <main className="layout">
      <Header/>
      <Main children={children}/>
      <Footer/>
    </main>
  )
};

const App = () => {
  //const userName = "John Smith";
  const user = {
    "name": "John Smith",
    "age": 30,
    "status": "loged"
  };

  return (
    <div className="app">
      <UserContext.Provider value={user}>
        <Layout>
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
