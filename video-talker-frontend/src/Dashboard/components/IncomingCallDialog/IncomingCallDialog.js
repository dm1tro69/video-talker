import React from 'react'
import './IncomingCallDialog.css'

const IncomingCallDialog = ({callerUsername}) => {

    const handleAcceptButtonPress = () => {

    }
    const handleRejectButtonPress = () => {

    }

    return (
        <div className={'direct_call_dialog background_secondary_color'}>
          <span className={'direct_call_dialog_caller_name'}>{callerUsername}</span>
            <div className={'direct_call_dialog_button_container'}>
                <button className={'direct_call_dialog_accept_button'} onClick={handleAcceptButtonPress}>
                    Accept
                </button>
                <button className={'direct_call_dialog_reject_button'} onClick={handleRejectButtonPress}>
                    Reject
                </button>
            </div>
        </div>
    )
}
export default IncomingCallDialog