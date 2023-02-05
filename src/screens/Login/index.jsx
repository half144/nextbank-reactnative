import { useState } from "react"
import { ActivityIndicator } from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import { useAuth } from "../../context/AuthContext"
import { Container, Footer, Form, FormArea, TextLink } from "./styles"
import { useTheme } from "../../hooks/useTheme"

const Login = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { primary } = useTheme()
    const { login, loadingAuth } = useAuth()

    const handleLogin = () => {
        const data = { email, password }
        login(data)
    }

    return (
        <Container>
            <FormArea>
                <Logo />
                <Form>
                    <Input label="Email" placeholder="Email" onChangeText={setEmail} />
                    <Input label="Senha" placeholder="Senha" onChangeText={setPassword} />
                    <Button onPress={handleLogin} value={loadingAuth ? <ActivityIndicator color="white" size={30} /> : "Entrar"} />
                    <TextLink color={primary}>Esqueci minha senha</TextLink>
                </Form>
            </FormArea>
            <Footer>
                <TextLink color={primary} onPress={() => navigation.navigate("register")}>Criar conta</TextLink>
            </Footer>
        </Container>

    )
}

export default Login