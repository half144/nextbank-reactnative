import OptionInline from "../../../../components/OptionInline"
import { IconsArea, SmallText } from "../../../../styles/globalStyle"
import { Container } from "../../style"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const SendPix = ({ navigation }) => {

    return (
        <Container>
            <OptionInline onPress={() => navigation.navigate("typekey", { type: "CPF" })}>
                <IconsArea>
                    <MaterialCommunityIcons name="key" size={24} color="#b7b7b7" />
                </IconsArea>
                <SmallText>Enviar por CPF</SmallText>
            </OptionInline>
            <OptionInline onPress={() => navigation.navigate("typekey", { type: "telefone" })}>
                <IconsArea>
                    <MaterialCommunityIcons name="phone" size={24} color="#b7b7b7" />
                </IconsArea>
                <SmallText>Enviar por Telefone</SmallText>
            </OptionInline>
            <OptionInline>
                <IconsArea>
                    <MaterialCommunityIcons name="qrcode-scan" size={24} color="#b7b7b7" />
                </IconsArea>
                <SmallText>Enviar por QR code</SmallText>
            </OptionInline>
        </Container>
    )
}

export default SendPix