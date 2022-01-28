import {createContext,useContext} from 'react';
import './styles/style.css';

const UserContext = createContext("Unknown");

const UserInfo = () => {
  const userName = useContext(UserContext);
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
  const UserName = useContext(UserContext);
  return (
    <main className="main">
      <div className="container">
        <div className="cols">
          <aside className="cols__aside">
            lorem*20
          </aside>
          <div className="cols__content">
            <h2>Hello {UserName}</h2>
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
  const userName = "John Smith";

  return (
    <div className="app">
      <UserContext.Provider value={userName}>
        <Layout userName={userName}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quisquam, vitae! Ab, aut dolor ipsum
        laudantium magnam maiores molestiae mollitia natus neque nulla pariatur quo recusandae sapiente, totam voluptate
        voluptatem?
        </Layout>
      </UserContext.Provider>
    </div>
  );
};

export default App;
