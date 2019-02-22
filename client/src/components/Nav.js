import React from 'react'

function Nav({logout}) {
    return (
        <div>
            {localStorage.token ? <button onClick = {logout}>logout</button> : <div> </div>}
        </div>
    )
}

export default Nav
