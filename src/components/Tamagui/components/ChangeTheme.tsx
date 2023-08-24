import { Switch, SwitchProps, XStack } from "tamagui"
import { Sun, Moon } from "@tamagui/lucide-icons"

export function ChangeTheme({ ...rest }: SwitchProps) {
    return(
      <XStack space="$2" ai="center">
        <Sun size="$2" />
        <Switch size="$2" {...rest}>
            <Switch.Thumb animation="bouncy" />
          </Switch>
        <Moon size="$2" />
      </XStack>  
    )
}