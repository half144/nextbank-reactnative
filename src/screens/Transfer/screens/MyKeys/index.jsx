import OptionInline from "../../../../components/OptionInline"
import useUser from "../../../../hooks/useUser"
import { SmallText } from "../../../../styles/globalStyle"
import { Container } from "../../style"

const MyKeys = () => {
    const { user } = useUser()

    return (
        <Container>
            {user.pix.map((pix, index) => (
                <OptionInline key={index}>
                    <SmallText>{pix}</SmallText>
                </OptionInline>
            ))
            }
        </Container>
    )
}

export default MyKeys