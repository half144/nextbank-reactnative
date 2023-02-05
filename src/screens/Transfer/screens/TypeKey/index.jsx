import { Container } from '../../style'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { Area } from './styles'
import { useState } from 'react'


const TypeKey = ({ route, navigation }) => {
    const { type } = route.params
    const [keyValue, setKeyValue] = useState("")

    const handleButtonNavigateToSelectValue = () => {
        navigation.navigate("selectvalue", { to: keyValue })
    }

    return (
        <Container>
            <Area >
                <Input label={type} onChangeText={setKeyValue} autoFocus placeholder={`Digite a chave ${type}`} />
                <Button onPress={handleButtonNavigateToSelectValue} margin value="Selecionar valor a ser enviado" />
            </Area>
        </Container>
    )

}

export default TypeKey