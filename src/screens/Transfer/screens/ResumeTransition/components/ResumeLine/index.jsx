import { Label, Line, Value } from "./styles"

const ResumeLine = ({ label, value }) => (
    <Line>
        <Label>{label}</Label>
        <Value>{value}</Value>
    </Line>
)

export default ResumeLine