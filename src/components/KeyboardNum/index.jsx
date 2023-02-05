import Button from "../Button"
import { Number } from "./components/Num"
import { ContainerNum, NumRow } from "./styles"

const KeyboardNum = ({ handleChange, onPress }) => {
    return (
        <>
            <ContainerNum>
                <NumRow>
                    <Number value={1} handleChange={handleChange} />
                    <Number value={2} handleChange={handleChange} />
                    <Number value={3} handleChange={handleChange} />
                </NumRow>
                <NumRow>
                    <Number value={4} handleChange={handleChange} />
                    <Number value={5} handleChange={handleChange} />
                    <Number value={6} handleChange={handleChange} />
                </NumRow>
                <NumRow>
                    <Number value={7} handleChange={handleChange} />
                    <Number value={8} handleChange={handleChange} />
                    <Number value={9} handleChange={handleChange} />
                </NumRow>
                <NumRow>
                    <Number value={""} handleChange={handleChange} />
                    <Number value={0} handleChange={handleChange} />
                    <Number value={"<"} handleChange={handleChange} />
                </NumRow>
            </ContainerNum>
            <Button width="80%" value="Continuar" onPress={onPress} />
        </>

    )
}

export default KeyboardNum