import {createContext} from 'react';

const userName = "John Smith";

const UserContext = createContext({
	userName: '',
	setUserName: () => {} //for testing? need figure out
});

export {UserContext, userName};
