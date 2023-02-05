import { useState } from "react"
import useRegisterForm from "./hooks/useRegisterForm"
import DigitsCode4 from "./screens/4DigitsCode"
import EmailPass from "./screens/EmailPass"
import LoadingScreen from "../LoadingScreen"



const Register = () => {
    const formState = useRegisterForm()

    const Steps = [<EmailPass formState={formState} />, <DigitsCode4 formState={formState} />, <LoadingScreen formState={formState} />]

    return (
        Steps[formState.currentStep]
    )
}

export default Register