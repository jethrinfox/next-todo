import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "../components/Container"
import { DarkModeSwitch } from "../components/DarkModeSwitch"
import { Footer } from "../components/Footer"
import { addCounter, decreaseCounter } from "../redux/ducks/counter/counterDuck"

const Index = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <Container height="100vh">
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Button
          onClick={() => dispatch(addCounter())}
          rightIcon={<ArrowUpIcon />}
          colorScheme="teal"
          variant="outline"
        >
          ADD
        </Button>
        <Heading py={6} fontSize="10vw">
          COUNTER: {counter.counter}
        </Heading>
        <Button
          onClick={() => dispatch(decreaseCounter())}
          mt={1}
          rightIcon={<ArrowDownIcon />}
          colorScheme="teal"
          variant="outline"
        >
          DECREASE
        </Button>
      </Flex>

      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
    </Container>
  )
}
export default Index
