import { Button, HStack } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
    <HStack>
        <Button colorPalette='blue' size='xl'>Hello</Button>
        <Button variant="surface" colorPalette='red' size='2xl'>Hello</Button>
    </HStack>
  )
}

export default App
