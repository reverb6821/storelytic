import React from 'react';
import { useHistory } from 'react-router-dom';

const Context = React.createContext({});

const ContextProvider = ({ children }) => {
    const ref = React.useRef(null);
    const history = useHistory();



    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    );

}

export default ContextProvider;