import {useContext, useMemo, memo} from "react";
import {UserContext} from '../contexts/user-context'

const Main = ({children}) => {
  const {userName} = useContext(UserContext);
  
  //some reason don't work
  /*const value = useMemo(
    () => (userName),
    [userName]
  )*/
  console.log("msg from Main")
  return (
    <main className="main">
      <div className="container">
        <div className="cols">
          <aside className="cols__aside">
            Lorem ipsum dolor sit amet.
          </aside>
          <div className="cols__content">
            <div>
              <h2>Hello {userName}</h2>
              {/*<h3>status {userStatus}</h3>*/}
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

//export default memo(Main);
export default Main;
