import { Container } from "../Register/styles"
import { ActivityIndicator } from "react-native"
import { useTheme } from "../../hooks/useTheme"


const LoadingScreen = () => {
    const { primary } = useTheme()

    return (
        <Container>
            <ActivityIndicator color={primary} size={50} />
        </Container>
    )
}

export default LoadingScreen