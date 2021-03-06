import socketClient from 'socket.io-client'
import {store} from "../../store/store";
import {setActiveUsers} from "../../store/actions/dashboardActions";
import * as webRTCHandler from '../webRTC/webRTCHandler'

const SERVER = 'http://localhost:5000'

const broadcastEventTypes = {
    ACTIVE_USERS: 'ACTIVE_USERS',
    GROUP_CALL_ROOMS: 'GROUP_CALL_ROOMS'
}


let socket;

export const connectWithWebSocket = () => {
    socket = socketClient(SERVER)

    socket.on('connection', ()=> {
        console.log('successfully connected server')
        console.log(socket.id)
    })
    socket.on('broadcast', (data) => {
        handleBroadcastEvents(data)
    })
    socket.on('pre-offer', (data) => {
        webRTCHandler.handlePreOffer(data)
    })
}

export const registerNewUser = (username) => {
    socket.emit('register-new-user', {
        username: username,
        socketId: socket.id
    })
}
export const sendPreOffer = (data)=> {
    socket.emit('pre-offer', data)
}
const handleBroadcastEvents = (data) => {
    switch (data.event) {
        case broadcastEventTypes.ACTIVE_USERS:
            const activeUsers = data.activeUsers.filter(activeUser => activeUser.socketId !== socket.id)
            store.dispatch(setActiveUsers(activeUsers))
            break;
        default: break;

    }
}