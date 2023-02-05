import { Card, CardDetails, CardNumber, SmallText, Header } from "./styles"
import { Fontisto } from '@expo/vector-icons';

const CreditCard = ({ card }) => {
    return (
        <Card>
            <Header>
                <Fontisto name="visa" size={40} color="white" />
            </Header>
            <CardDetails>
                <SmallText>{card.holder}</SmallText>
                <CardNumber>{String(card.cardNumber).replace(/(.{4})/g, '$1 ').trim()}</CardNumber>
                <SmallText>{card.expires} {card.cvv}</SmallText>
            </CardDetails>
        </Card>
    )
}

export default CreditCard