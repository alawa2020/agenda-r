import React from 'react'

const MsgError = ({msgError}) => {
    return (
        <>
        {
            (msgError != null)
            ?
            (
                <div className="alert alert-success text-center" role="alert">
                    {msgError}
                </div>
            )
            :
            (
                <span></span>
            )
        }
            
        </>
    )
}

export default MsgError
