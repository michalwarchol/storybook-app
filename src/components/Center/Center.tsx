import React from 'react'
import "./Center.scss";

const Center:React.FC = ({children}) => {
    return(
        <div className={`center`}>{children}</div>
    )
}
export default Center;