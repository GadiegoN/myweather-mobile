import { useState } from "react"
import { useFonts } from "expo-font"
import { TamaguiProvider, XStack, Theme, YStack, Input, Button, Text, Card, H1, H2, H4 } from "tamagui"

import config from './tamagui.config'
import { User } from "./src/components/Tamagui/components/User"
import { ChangeTheme } from "./src/components/Tamagui/components/ChangeTheme"
import { StatusBar } from "expo-status-bar"
import { Search } from "@tamagui/lucide-icons"
import { Header } from "./src/components/Header"

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);

  const searchWeather = async () => {
    const appkey = 'APIKEY';
    const lang = 'pt_br';
    const units = 'metric';

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appkey}&lang=${lang}&units=${units}`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Erro ao buscar dados de clima');
      }
    } catch (error) {
      console.error('Erro ao buscar dados de clima', error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchWeather();
    setCity('');
  };

  if (!loaded) {
    return null
  }

  return(
    <TamaguiProvider config={config}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        style={isDarkTheme ? 'light' : 'dark'}
      />
      <Theme name={isDarkTheme ? 'dark' : 'light'}>
        <YStack f={1} p="$6" pt="$8" backgroundColor="$background">
          <XStack jc="space-between" ai="center">
            <User />
            <ChangeTheme onCheckedChange={setIsDarkTheme} />
          </XStack>


          <XStack space="$2" ai="center" mt="$6">
            <Input
              flex={1}
              h={"$5"}
              placeholder="Buscar cidade..."
              focusStyle={{ 
                bw: 2,
                boc: "$blue10"
              }} 
              value={city}
              onChangeText={setCity}
            />

            <Button
              icon={Search}
              w="$5"
              h="$5"
              bg="$blue10"
              onPress={handleSubmit}
            ></Button>
          </XStack>

          {weatherData && (
            <YStack
              borderWidth="$1"
              borderColor="$blue10"
              p="$4"
              mt="$6"
              borderRadius="$4"
            >
              <H2>{weatherData.name}</H2>
              <H4>Temperatura: {Math.trunc(weatherData.main.temp)}°C</H4>
              <H4>{weatherData.weather[0].description}</H4>
            </YStack>
          )}
        </YStack>
      </Theme>
    </TamaguiProvider>
  )
} 