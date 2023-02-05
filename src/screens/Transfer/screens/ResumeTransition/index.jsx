import { Container } from '../../style'
import { MaterialIcons } from "@expo/vector-icons"
import { AmmountSended, Header, TransitionResume } from './styles'
import ResumeLine from './components/ResumeLine'
import { SmallText } from '../../../../styles/globalStyle'

const ResumeTransition = ({ resume }) => {

    return (
        <Container>
            <Header>
                <MaterialIcons name='verified' color="green" size={80} />
                <SmallText>Transação feita com sucesso</SmallText>
                <AmmountSended>R${resume?.ammount}</AmmountSended>
            </Header>
            <TransitionResume>
                <ResumeLine label="De" value={resume?.from} />
                <ResumeLine label="Para" value={resume?.to} />
                <ResumeLine label="Data" value={resume?.date} />
            </TransitionResume>
        </Container>
    )
}

export default ResumeTransition