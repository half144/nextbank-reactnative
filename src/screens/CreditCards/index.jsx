import { Dimensions, ScrollView } from "react-native"
import { Container } from "./styles"

import CardInfoElement from "../../components/CardInfo";
import useUser from "../../hooks/useUser";

const CreditCards = () => {
    const { user } = useUser()
    return (
        <Container>
            <ScrollView
                horizontal
                snapToInterval={Dimensions.get("screen").width}
                showsHorizontalScrollIndicator={false}
            >
                {user?.creditCards.map(card => (
                    <CardInfoElement key={card._id} card={card} />
                ))}
            </ScrollView>
        </Container>
    )
}

export default CreditCards