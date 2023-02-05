import { useEffect, useState } from "react"
import { Switch } from "react-native"
import { IconsArea, SmallText } from "../../styles/globalStyle"
import { useTheme } from "../../hooks/useTheme"
import OptionInline from "../OptionInline"
import useSwitch from "./hooks/useSwitch"

const SwitchOptionCard = ({ text, state, type, cardId }) => {
    const [isEnabled, handleSwitch] = useSwitch({ state, type, cardId })
    const { primary, primaryShadow } = useTheme()

    return (
        <OptionInline onPress={handleSwitch}>
            <IconsArea>
                <Switch
                    trackColor={{ false: "#767577", true: primaryShadow }}
                    thumbColor={isEnabled ? primary : "#f4f3f4"}
                    onChange={handleSwitch}
                    value={isEnabled} />
            </IconsArea>
            <SmallText>{text}</SmallText>
        </OptionInline>

    )
}

export default SwitchOptionCard