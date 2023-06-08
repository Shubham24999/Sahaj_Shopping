import React, { useState } from 'react'

import { Card, 
  CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup
} from '@chakra-ui/react'

const SingleCard = ({title,img,description,price,handlesize,size}) => {
    console.log(handlesize,size)


    const text = description;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    !size && handlesize();
  };

  console.log("hii")

  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src={img}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        boxSize='250px'
        border="1px solid black"
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md' border="1px solid black">{title ? title.slice(0, 35) : text}</Heading>
        <Heading size='xs' border="1px solid black" >
          {isReadMore ? text.slice(0, 140) : text.slice(0, 200)}
      <span style={{color:"red",textDecoration:"underline",cursor:"pointer"}} onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
        </Heading >
        <Text color='blue.600' fontSize='sm'>
          Rs.{price}
        </Text>
      </Stack>
    </CardBody>
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='solid' colorScheme='red'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default SingleCard
