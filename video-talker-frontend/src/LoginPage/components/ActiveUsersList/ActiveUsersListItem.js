import React from 'react'
import userAvatar from '../../../../src/resurces/userAvatar.png'
import {callToOtherUser} from "../../../utils/webRTC/webRTCHandler";

const ActiveUsersListItem = ({activeUser}) => {

    const handleListItemPressed = () => {
        callToOtherUser(activeUser)
    }

    return (
        <div className={'active_user_list_item'} onClick={handleListItemPressed}>
            <div className={'active_user_list_image_container'}>
                <img className={'active_user_list_image'} src={userAvatar} alt="avatar"/>
            </div>
            <span className={'active_user_list_text'}>{activeUser}</span>
        </div>
    )
}
export default ActiveUsersListItem