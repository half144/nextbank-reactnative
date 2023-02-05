import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home"
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons"
import { useTheme } from "../hooks/useTheme"
import Wallet from "../screens/Wallet"
import Notifications from "../screens/Notifications"
import Configuration from "../screens/Configuration"

const { Navigator, Screen } = createBottomTabNavigator()

const HomeTabs = () => {
    const { primary } = useTheme()

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: primary,
                tabBarStyle: {
                    height: 60,
                    alignItems: "center",
                    paddingBottom: 5,
                    paddingTop: 5
                }
            }}>
            <Screen name="home" component={Home} options={{
                tabBarLabel: "Inicio",
                tabBarIcon: ({ color }) => (<Entypo name="home" size={25} color={color} />)
            }
            } />
            <Screen name="wallet" component={Wallet} options={{
                tabBarLabel: "Carteira",
                tabBarIcon: ({ color }) => (<Entypo name="wallet" size={24} color={color} />)
            }} />
            <Screen name="notification" component={Notifications} options={{
                headerTitle: "Notificações",
                tabBarLabel: "Notificações",
                tabBarIcon: ({ color }) => (<Ionicons name="notifications" size={24} color={color} />),
                headerShown: true
            }} />
            <Screen name="configurations" component={Configuration} options={{
                tabBarLabel: "Configurações",
                tabBarIcon: ({ color }) => (<FontAwesome name="gear" size={24} color={color} />)
            }} />
        </Navigator>
    )
}

export default HomeTabs