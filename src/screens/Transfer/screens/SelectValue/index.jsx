import { Container } from "../../style"
import KeyboardNum from "../../../../components/KeyboardNum"
import { useState } from "react";
import { Display, Num } from "./styles";
import useUser from '../../../../hooks/useUser'

const SelectValue = ({ navigation, route }) => {
    const [state, setState] = useState("");
    const { to } = route.params
    const { user } = useUser()

    const handleChange = (value) => {
        if (value === "<") return setState((prev) => prev.slice(0, -1));
        setState((prev) => prev + value);
    };

    const handlePress = () => {
        navigation.popToTop()
        navigation.navigate("resultPixTransfer", {
            resumeTransition: {
                from: user.pix[0],
                to,
                ammount: state
            }
        });
    }

    return (
        <Container>
            <Display>
                <Num>R${state}</Num>
            </Display>
            <KeyboardNum onPress={handlePress} handleChange={handleChange} />
        </Container>
    )
}

export default SelectValue