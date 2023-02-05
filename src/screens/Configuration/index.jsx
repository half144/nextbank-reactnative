import { Container, Main, UserName, UserInfo, InlineContent } from "./style"
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from "../../hooks/useTheme"
import { BoldText, Paragraph, SmallText } from "../../styles/globalStyle";
import useUser from "../../hooks/useUser";
import OptionInline from "../../components/OptionInline";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthContext";

const Configuration = () => {
    const { logout } = useAuth()
    const { primary } = useTheme()
    const { user } = useUser()

    return (
        <Container>
            <UserInfo>
                <FontAwesome name="user-circle" size={120} color={primary} />
                <UserName color="black">{user?.name}</UserName>
                <Paragraph color="black">Agencia: <BoldText>432 432 232</BoldText></Paragraph>
                <Paragraph color="black">Instituição: <BoldText>503 - NextPay</BoldText></Paragraph>
            </UserInfo>
            <Main>
                <OptionInline>
                    <InlineContent>
                        <SmallText>Meu CPF</SmallText>
                        <SmallText noBold>{user?.cpf}</SmallText>
                    </InlineContent>
                </OptionInline>
                <OptionInline>
                    <InlineContent>
                        <SmallText>Meu telefone</SmallText>
                        <SmallText noBold>(21) 96922 0863</SmallText>
                    </InlineContent>
                </OptionInline>
                <OptionInline>
                    <SmallText>Dados pessoais</SmallText>
                </OptionInline>
                <Button width={"90%"} value={"Sair"} onPress={logout} />
            </Main>
        </Container>
    )
}

export default Configuration