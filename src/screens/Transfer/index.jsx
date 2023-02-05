import Card from "../../components/Card"
import { Container, OptionsTransfer } from "./style"
import { useTheme } from "../../hooks/useTheme"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { IconsArea, SmallText } from "../../styles/globalStyle"
import OptionInline from "../../components/OptionInline"

const Transfer = ({ navigation }) => {
    const { primary } = useTheme()

    return (
        <Container>
            <OptionsTransfer>
                <Card onPress={() => navigation.navigate("sendpix")} text="Enviar transferencia">
                    <MaterialCommunityIcons name="arrow-up-bold" size={24} color={primary} />
                </Card>
                <Card text="Receber transferencia">
                    <MaterialCommunityIcons name="arrow-down-bold" size={24} color={primary} />
                </Card>
                <Card onPress={() => navigation.navigate("myKeys")} text="Minhas chaves">
                    <MaterialCommunityIcons name="key" size={24} color={primary} />
                </Card>
            </OptionsTransfer>
            <OptionInline>
                <IconsArea>
                    <MaterialCommunityIcons name="key" size={24} color="#b7b7b7" />
                </IconsArea>
                <SmallText>Criar nova chave pix</SmallText>
            </OptionInline>
            <OptionInline>
                <IconsArea>
                    <MaterialCommunityIcons name="qrcode-scan" size={24} color="#b7b7b7" />
                </IconsArea>
                <SmallText>Pagar por QR Code</SmallText>
            </OptionInline>
        </Container>
    )
}

export default Transfer