import OptionInline from "../../components/OptionInline"
import useBalance from "../../hooks/useBalance"
import { IconsArea, Paragraph, SmallText } from "../../styles/globalStyle"
import { Ammount, BankAccount, BankAccountArea, Container, Header, Main } from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useTheme } from "../../hooks/useTheme"

const Wallet = () => {
    const { ammount, user } = useBalance()
    const { primary } = useTheme()

    return (
        <Container>
            <Header>
                <BankAccountArea>
                    <BankAccount>
                        {user?.name} 380 0001 4032345
                    </BankAccount>
                </BankAccountArea>
                <Paragraph color="#fff">Saldo disponivel</Paragraph>
                <Ammount>R${ammount}</Ammount>
                <Paragraph color="#fff">R$ 0,00 desse saldo é de cashback</Paragraph>
            </Header>
            <Main>
                <OptionInline>
                    <IconsArea>
                        <MaterialCommunityIcons name="cash-plus" size={30} color={primary} />
                    </IconsArea>
                    <SmallText>Deposito por boleto</SmallText>
                </OptionInline>
                <OptionInline>
                    <IconsArea>
                        <MaterialCommunityIcons name="cash-register" size={30} color={primary} />
                    </IconsArea>
                    <SmallText>Ver extrato</SmallText>
                </OptionInline>
                <OptionInline>
                    <IconsArea>
                        <MaterialCommunityIcons name="cash-minus" size={30} color={primary} />
                    </IconsArea>
                    <SmallText>Controle de gastos</SmallText>
                </OptionInline>
            </Main>
        </Container>
    )
}

export default Wallet