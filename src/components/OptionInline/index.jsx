import { MotiView } from "moti"
import useHover from "../../hooks/useHover"
import { Container } from "./style"

const OptionInline = ({ children, onPress }) => {
    const { animationState, handlePressIn, handlePressOut } = useHover("#f6f6f6", "#ddd")

    return (
        <Container onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
            <MotiView transition={{
                type: 'timing',
                duration: 150,
            }} state={animationState} style={{ borderRadius: 8, backgroundColor: "#f6f6f6", height: "100%", width: "100%", flexDirection: "row", alignItems: "center", paddingLeft: 20 }}>
                {children}
            </MotiView>
        </Container>
    )
}

export default OptionInline