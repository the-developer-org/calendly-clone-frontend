import { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

const AuthForm = () => {
    const [show, setShow] = useState(false);
    const toggleHandler = () => {
        setShow(prevState => !prevState);
    };
    if (show) {
        return <Signup toggle={toggleHandler} />;
    } else {
        return <Login toggle={toggleHandler} />;
    }
};

export default AuthForm;
