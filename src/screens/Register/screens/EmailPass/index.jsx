import { Alert } from "react-native"
import Button from "../../../../components/Button"
import Input from "../../../../components/Input"
import { Container, Form } from "../../styles"

const EmailPass = ({ formState }) => {
    const handleContinue = () => {
        if (formState.isNotFullFormInputs()) return Alert.alert("Por favor, preencha todos os campos")
        formState.handleNextPage()
    }
    return (
        <Container>
            <Form>
                <Input onChangeText={(value) => formState.handleChange(value, "fullname")} label="Nome completo" placeholder="Nome completo" />
                <Input onChangeText={(value) => formState.handleChange(value, "email")} label="Email" placeholder="Email" />
                <Input onChangeText={(value) => formState.handleChange(value, "cpf")} label="CPF" placeholder="CPF" />
                <Input onChangeText={(value) => formState.handleChange(value, "password")} label="Senha" placeholder="Senha" />
                <Button width="80%" value="Continuar" onPress={handleContinue} margin />
            </Form>
        </Container>
    )
}

export default EmailPass