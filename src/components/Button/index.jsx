import { ButtonElement, Value } from "./styles"





const Button = ({ value, onPress, width, margin }) => {

    return (
        <ButtonElement width={width} onPress={onPress} margin={margin} activeOpacity={0.9}>
            <Value>
                {value}
            </Value>
        </ButtonElement>
    )
}

export default Button