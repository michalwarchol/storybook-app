import React from 'react';
import "./Input.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    s?: "small" | "medium" | "large";
}

const Input:React.FC<Props> = ({s="medium", ...props}) => {
    return(
        <input className={`input ${s}`} {...props} />
    )
}
export default Input;