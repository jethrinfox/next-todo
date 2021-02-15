import { Text } from "@chakra-ui/react"
import { Container } from "../components/Container"
import { DarkModeSwitch } from "../components/DarkModeSwitch"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"

export default function Custom404() {
  return (
    <Container height="100vh">
      <Hero title="404 - Nothing here" />
      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
    </Container>
  )
}
