import { Container } from "../../style"
import LoadingScreen from "../../../LoadingScreen"
import ResumeTransition from "../ResumeTransition"
import usePix from "./hooks/usePix"

const PixResult = ({ route }) => {

    const { data, isLoading } = usePix(route.params.resumeTransition)

    return (
        <Container>
            {isLoading ? <LoadingScreen /> : <ResumeTransition resume={data} />}
        </Container>
    )
}

export default PixResult