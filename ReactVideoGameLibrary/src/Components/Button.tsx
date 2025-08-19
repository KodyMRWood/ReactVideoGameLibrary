import { ReactNode, useState } from "react";
import Alert from "./Alert";


interface Props {
    children:ReactNode;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    onPressed:()=> void;
}



const Button = ({children,color="primary", onPressed}: Props) => {
    const [visible, setAlertVisible] = useState(false);
    return (
    <div>
        {visible && <Alert onClose={()=>{setAlertVisible(false)}}>Are you sure you want that drink?</Alert>} 
        <button type="button" className={'btn btn-' + color} onClick={()=>{setAlertVisible(true); onPressed}}>{children}</button>
    </div>
)
}

export default Button