import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
import CreditCards from "../screens/CreditCards"
import ExtractScreen from "../screens/Extract"
import Transfer from "../screens/Transfer"
import MyKeys from "../screens/Transfer/screens/MyKeys"
import PixResult from "../screens/Transfer/screens/PixResult"
import SelectValue from "../screens/Transfer/screens/SelectValue"
import SendPix from "../screens/Transfer/screens/SendPix"
import TypeKey from "../screens/Transfer/screens/TypeKey"
import HomeTabs from "./hometabs.routes"

const { Navigator, Screen } = createStackNavigator()

const Stacks = () => {
    return (
        <Navigator screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}>
            <Screen name="hometabs" component={HomeTabs}
                options={{ headerShown: false }} />
            <Screen name="creditcards" component={CreditCards}
                options={{
                    headerTitle: "Cartões"
                }} />
            <Screen name="transfer" component={Transfer}
                options={{
                    headerTitle: "Transferencias"
                }} />
            <Screen name="sendpix" component={SendPix}
                options={{
                    headerTitle: "Enviar Pix"
                }} />
            <Screen name="typekey" component={TypeKey}
                options={{
                    headerTitle: "Digite a chave"
                }} />
            <Screen name="selectvalue" component={SelectValue}
                options={{
                    headerTitle: "Selecione o valor desejado"
                }} />
            <Screen name="resultPixTransfer" component={PixResult}
                options={{
                    headerShown: false
                }} />
            <Screen name="myKeys" component={MyKeys}
                options={{
                    headerTitle: "Minhas chaves"
                }} />
            <Screen name="extract" component={ExtractScreen}
                options={{
                    headerTitle: "Extrato"
                }} />
        </Navigator>
    )
}

export default Stacks