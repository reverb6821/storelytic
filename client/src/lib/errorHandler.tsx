import { useLocation } from 'react-router-dom';
import { get } from 'lodash';
import Page404 from '../Pages/Page404';

const ErrorHandler = ({ children }) => {
    const location = useLocation();

    switch (get(location.state, 'errorStatusCode')) {
        case 404:
            return <Page404 />;

        // ... cases for other types of errors

        default:
            return children;
    }
};

export default ErrorHandler;
