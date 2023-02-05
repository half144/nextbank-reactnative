import { Amount, Balance, Container, Description, Header, OptionsArea, ServicesArea, Text, UserDetails, UserDetailsArea, BoldText } from "./styles"
import { FontAwesome, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../../components/Card"
import { Pressable, ScrollView } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { IconsArea, SmallText } from "../../styles/globalStyle"
import OptionInline from "../../components/OptionInline";
import useBalance from "../../hooks/useBalance";

const Home = ({ navigation }) => {
    const { ammount, isVisible, handleToggleVisible, user, loadingUserData } = useBalance()
    const { primary } = useTheme()

    return (
        <Container>
            <Header>
                <UserDetailsArea>
                    <UserDetails>
                        <Text>bem vindo {!loadingUserData ? <BoldText>{user?.name}</BoldText> : "Loading"}</Text>
                        <Balance>
                            <Ionicons
                                onPress={handleToggleVisible}
                                name={isVisible ? "eye-outline" : "eye-off-outline"}
                                size={30}
                                color={primary} />
                            <Amount>R$ {isVisible ? ammount : "-------"}</Amount>
                        </Balance>
                        <Pressable onPress={() => navigation.navigate("extract")}>
                            <Description>ver extrato</Description>
                        </Pressable>
                    </UserDetails>
                </UserDetailsArea>
                <OptionsArea>
                    <Feather name="menu" size={30} color={primary} />
                </OptionsArea>
            </Header>
            <ServicesArea>
                <ScrollView
                    horizontal
                    snapToInterval={130}
                    showsHorizontalScrollIndicator={false}
                >
                    <Card margin text="Transferir" onPress={() => navigation.navigate("transfer")}>
                        <MaterialCommunityIcons name="bank-transfer" size={28} color={primary} />
                    </Card>
                    <Card margin text="Investir">
                        <Ionicons name="bar-chart" size={26} color={primary} />
                    </Card>
                    <Card margin text="Depositar">
                        <MaterialCommunityIcons name="cash-plus" size={26} color={primary} />
                    </Card>
                    <Card margin text="Recarga">
                        <Feather name="smartphone" size={26} color={primary} />
                    </Card>
                </ScrollView>
            </ServicesArea>
            <OptionInline onPress={() => navigation.navigate("creditcards")}>
                <IconsArea>
                    <FontAwesome name="credit-card-alt" size={26} color="#b7b7b7" />
                </IconsArea>
                <SmallText>Meus cartoes</SmallText>
            </OptionInline>
            <OptionInline>
                <IconsArea>
                    <MaterialCommunityIcons name="account-cash" size={26} color="#b7b7b7" />
                </IconsArea>
                <SmallText>Emprestimo</SmallText>
            </OptionInline>
        </Container>
    )
}

export default Home