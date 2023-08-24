import { Avatar, H4, Text, XStack, YStack } from "tamagui";

export function User() {
    return (
        <XStack space="$2" ai="center">
            <Avatar size="$5" circular>
                <Avatar.Image
                    src="https://github.com/gadiegon.png"
                />

                <Avatar.Fallback backgroundColor="$gray5" />
            </Avatar>

            <YStack>
                <Text color="$gray10">
                    Olá,
                </Text>

                <H4 fontWeight="bold" mt="$-2">
                    Gadiego
                </H4>
            </YStack>
        </XStack>
    )
}