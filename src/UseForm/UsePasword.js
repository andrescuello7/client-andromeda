import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function UsePasword() {
    const [visible, setVisible] = useState(false)

    const Icon =(
    <FontAwesomeIcon icon = { visible ? "eye-slash" : "eye" }
    onClick={ () => setVisible( visibility => !visibility )}
    />
    ) 

    const InputType = visible ? "text" : "password";

    return [InputType, Icon];
}
