import { MotiView } from "moti"
import useHover from "../../../../hooks/useHover"
import { Num, NumValue } from "../../styles"



export const Number = ({ value, handleChange }) => {
    const { animationState, handlePressIn, handlePressOut } = useHover("#fff", "#f2f2f2")

    return (
        <Num onPress={() => handleChange(value)} onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <MotiView transition={{
                type: 'timing',
                duration: 100,
            }} state={animationState} style={{ borderRadius: 8, height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                <NumValue>{value}</NumValue>
            </MotiView>
        </Num>
    )
}