import KeyboardNum from "../../../../components/KeyboardNum"
import { BoldText } from "../../../../styles/globalStyle"
import { Container } from "../../styles"
import { DisplayNums, Num, Title } from "./styles"

const DigitsCode4 = ({ formState }) => {
    const { pass4Digits, handlePass4Digits, handleRegister } = formState

    return (
        <Container>
            <Title>
                <BoldText>Crie sua senha</BoldText>
            </Title>
            <DisplayNums>
                <Num>{pass4Digits}</Num>
            </DisplayNums>
            <KeyboardNum handleChange={handlePass4Digits} onPress={handleRegister} />
        </Container>
    )
}

export default DigitsCode4