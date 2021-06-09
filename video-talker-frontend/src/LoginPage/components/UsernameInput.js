
import React from 'react'

const UsernameInput = (props) => {
    const {username, setUsername} = props;
    return (
        <div className={'login-page_input_container'}>
            <input
                onChange={(e)=> {setUsername(e.target.value)}}
                className={'login-page_input background_main_color text_main_color'}
                placeholder={'Enter your name'}
                value={username}
                type="text"/>

        </div>
    )
}
export default UsernameInput