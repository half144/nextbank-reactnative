import { MotiView } from "moti"
import useHover from "../../hooks/useHover"
import { CardElement, IconArea, Text } from "./style"


const Card = ({ children, text, onPress, margin }) => {
    const { animationState, handlePressIn, handlePressOut } = useHover("#fff", "#f2f2f2")

    return (
        <CardElement testID="card" onPressIn={handlePressIn} onPressOut={handlePressOut} hasMargin={margin} onPress={onPress}>
            <MotiView transition={{
                type: 'timing',
                duration: 100,
            }} state={animationState} style={{ borderRadius: 8, height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                <IconArea>
                    {children}
                </IconArea>
                <Text>{text}</Text>
            </MotiView>
        </CardElement >
    )
}

export default Card