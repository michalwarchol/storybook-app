import React from 'react'
import "./Button.scss";


type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "fill" | "outline";
}

const Button:React.FC<Props> = ({variant="fill", children, ...props}) => {
    return(
        <button className={`button ${variant}`} {...props}>
            {children}
        </button>
    )
}
export default Button;