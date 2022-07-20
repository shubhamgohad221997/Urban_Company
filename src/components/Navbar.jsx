import { Box,Button,Image, Input, useDisclosure } from "@chakra-ui/react";

import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'


export default function Navbar(){
  
    return(
        <div>
         <Box className="nav">
            <Box className="nav1">
                <Image className="navimg" src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"></Image>
            </Box>
            <Box className="nav2">
             
               
                



                <div className="nav21">    <button className="a1">Blog</button> </div>
                <div className="nav21">  <button className="a1">Register As A Professional</button></div>
                {/* <div className="nav21"> <a className="a1" href="/">My Bookings</a></div> */}
                <div className="nav21"><button >{<DrawerExample />}</button></div>
          
         
          
           
            </Box>
         </Box>
        </div>
    )
}




  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} className="b1" style={{backgroundColor:"black", marginTop:"-10px",fontSize:"16px",fontFamily:"axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",fontWeight:700}} onClick={onOpen}>
        Login/SingUp
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }