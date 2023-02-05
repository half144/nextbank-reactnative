import { CardInfo, Options } from "./styles"
import CreditCard from "../CreditCard"
import SwitchOptionCard from "../SwitchCard";

const CardInfoElement = ({ card }) => {
    const { options } = card

    return (
        <CardInfo>
            <CreditCard card={card} />
            <Options>
                <SwitchOptionCard cardId={card._id} state={options?.contactless} type="contactless" text="Aproximação" />
                <SwitchOptionCard cardId={card._id} state={options?.blocked} type="blocked" text="Bloquear transações" />
                <SwitchOptionCard cardId={card._id} state={options?.international} type="international" text="Compras internacionais" />
            </Options>
        </CardInfo>
    )
}

export default CardInfoElement