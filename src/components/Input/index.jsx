import { InputElement, Label, InputContainer } from "./styles"




const Input = ({ placeholder, label, onChangeText, onChange, autoFocus }) => {

    return (
        <InputContainer>
            <Label>{label}</Label>
            <InputElement onChangeText={onChangeText} onChange={onChange} placeholder={placeholder} autoFocus={autoFocus} />
        </InputContainer>
    )
}

export default Input