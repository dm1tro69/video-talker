import React from 'react'
import './ActiveUsersList.css'
import ActiveUsersListItem from "./ActiveUsersListItem";
import {connect} from "react-redux";


const ActiveUsersList = ({activeUsers}) => {

    return (
   <div className={'active_user_list_container'}>
       {activeUsers.map((user)=> <ActiveUsersListItem key={user.socketId} activeUser={user.username}/>)}
    </div>
)
}
const mapStateToProps = ({dashboard}) => ({
    ...dashboard
})
export default connect(mapStateToProps)(ActiveUsersList)