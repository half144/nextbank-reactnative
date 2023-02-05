import { Balance, Container, Extract, Header, Subtitle, Title } from "./styles"
import useBalance from "../../hooks/useBalance"
import ExtractItem from "./components/ExtractItem"

const ExtractScreen = () => {
    const { user, ammount } = useBalance()

    return (
        <Container>
            <Header>
                <Title>Extrato</Title>
                <Subtitle>Saldo disponível</Subtitle>
                <Balance>R$ {ammount}</Balance>
            </Header>
            <Extract>
                {user?.extract.map((extract, index) => (
                    <ExtractItem key={index} extract={extract} />
                ))}
            </Extract>
        </Container>
    )
}

export default ExtractScreen