import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({amount,img,CheckoutHandel}) => {
  return (
    <VStack>
        <Image src={img} boxSize="200px" objectFit="cover"/>
        <Text>{amount}</Text>
        <Button onClick={() => CheckoutHandel(amount)}>Buy Now</Button>
    </VStack>
  )
}

export default Card
