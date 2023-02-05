import { Ammount, Bold, Container, FlexCenter, Resume, Transition, Transitions } from "./styles"


const ExtractItem = ({ extract }) => {

    console.log(extract)

    return (
        <Container>
            <FlexCenter>
                <Bold>
                    {extract.date}
                </Bold>
            </FlexCenter>
            <Transitions>
                {extract.items.map((item, index) => (
                    <Transition key={index}>
                        <Resume>
                            <Bold>{item.type} - </Bold>
                            <Ammount color={item.plus ? "green" : "red"}>R${item.ammount}</Ammount>
                        </Resume>
                        <Bold>{item.date}</Bold>
                    </Transition>
                ))}
            </Transitions>
        </Container>
    )
}

export default ExtractItem