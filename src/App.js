import './styles/style.css';

const UserInfo = (props) => {
  return (
    <div className="userInfo">
      {props.userName}
    </div>
  )
};


const Header = (props) => {
  return (
    <header>
      <div className="container">
        <UserInfo {...props} />
      </div>
    </header>
  )
};

const Main = (props) => {
  return (
    <main className="main">
      <div className="container">
        <div className="cols">
          <aside className="cols__aside">
            lorem*20
          </aside>
          <div className="cols__content">
            {props.children}
          </div>
        </div>
      </div>
    </main>
  )
};

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ipsum?
      </div>
    </footer>
  )
};

const Layout = (props) => {
  return (
    <main className="layout">
      <Header {...props}/>
      <Main {...props}/>
      <Footer {...props}/>
    </main>
  )
};

const App = (props) => {
  const userName = "John Smith";
  return (
    <div className="app">
      <Layout userName={userName}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quisquam, vitae! Ab, aut dolor ipsum laudantium magnam maiores molestiae mollitia natus neque nulla pariatur quo recusandae sapiente, totam voluptate voluptatem?
      </Layout>
    </div>
  );
};

export default App;
