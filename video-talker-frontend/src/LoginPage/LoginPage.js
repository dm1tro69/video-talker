import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setUserName} from "../store/actions/dashboardActions";
import logo from '../../src/resurces/logo.png'
import './LoginPage.css'
import UsernameInput from "./components/UsernameInput";
import SubmitButton from "./components/SubmitButton";

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmitButtonPress = () => {
        history.push('/dashboard')
        dispatch(setUserName(username))
    }
    return (
        <div className={'login-page_container background_main_color'}>
            <div className={'login-page_login_box background_secondary_color'}>
                <div className={'login-page_logo_image'}>
                    <img className={'login-page_logo_image'} src={logo} alt="img"/>
                </div>
                <div className={'login-page_title_container'}>
                    <h2>Get on Board</h2>
                </div>
                <UsernameInput username={username} setUsername={setUsername}/>
                <SubmitButton handleSubmitButtonPress={handleSubmitButtonPress}/>
            </div>
        </div>
    );
};

export default LoginPage;
// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import logo from '../../src/resurces/logo.png';
// import UsernameInput from './components/UsernameInput';
// import SubmitButton from './components/SubmitButton';
// import { useHistory } from 'react-router-dom';
// import {setUserName} from "../store/actions/dashboardActions";
//
// import './LoginPage.css';
//
// const LoginPage = ({ saveUsername }) => {
//     const [username, setUsername] = useState('');
//
//     const history = useHistory();
//
//     const handleSubmitButtonPressed = () => {
//         history.push('/dashboard');
//         saveUsername(username);
//     };
//
//     return (
//         <div className='login-page_container background_main_color'>
//             <div className='login-page_login_box background_secondary_color'>
//                 <div className='login-page_logo_container'>
//                     <img className='login-page_logo_image' src={logo} alt='VideoTalker' />
//                 </div>
//                 <div className='login-page_title_container'>
//                     <h2>Get on Board</h2>
//                 </div>
//                 <UsernameInput username={username} setUsername={setUsername} />
//                 <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
//             </div>
//         </div>
//     );
// };
//
// const mapActionsToProps = (dispatch) => {
//     return {
//         saveUsername: username => dispatch(setUserName(username))
//     };
// };
//
// export default connect(null, mapActionsToProps)(LoginPage);
