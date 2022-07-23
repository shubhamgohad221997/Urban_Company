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

  import {MdArrowForwardIos } from 'react-icons/md';

  function Drawer1() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"></Image>
            <p className="spo">Salon For Women</p>
         </Box>
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
            <DrawerHeader>Salon For Women</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
                <p className="pi1" >Salon at home for Women <MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"></Image>
                <p className="pi1">Salon Classic   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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


  function Drawer2() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png"></Image>
            <p className="spo">Hair services for Women</p>
         </Box>
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
            <DrawerHeader>Hair services for Women</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
                <p className="pi1" >Salon at home for Women <MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"></Image>
                <p className="pi1">Salon Classic   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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

  function Drawer3() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"></Image>
            <p className="spo">Women's Therapies</p>
         </Box>
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
            <DrawerHeader>Women's Therapies</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
                <p className="pi1" >Salon at home for Women <MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"></Image>
                <p className="pi1">Salon Classic   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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

  function Drawer4() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"></Image>
            <p className="spo">Salon For Men</p>
         </Box>
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
            <DrawerHeader>Salon For Men</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
                <p className="pi1" >Salon at home for Women <MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"></Image>
                <p className="pi1">Salon Classic   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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

  function Drawer5() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"></Image>
            <p className="spo">Men's Therapies</p>
         </Box>
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
            <DrawerHeader>Men's Therapies</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
                <p className="pi1" >Salon at home for Women <MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"></Image>
                <p className="pi1">Salon Classic   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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

  function Drawer6() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png"></Image>
            <p className="spo">AC/Appliance Repair</p>
         </Box>
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
            <DrawerHeader>AC/Appliance Repair</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_ef2b79d0.png"></Image>
                <p className="pi1" >Air Conditioner<MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_c008bfc0.png"></Image>
                <p className="pi1">Microwave   <MdArrowForwardIos className="md1" /></p>
              
              </Box>



              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_ef2b79d0.png"></Image>
                <p className="pi1" >Air Conditioner<MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_c008bfc0.png"></Image>
                <p className="pi1">Microwave   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_ef2b79d0.png"></Image>
                <p className="pi1" >Air Conditioner<MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_c008bfc0.png"></Image>
                <p className="pi1">Microwave   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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

  function Drawer7() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png"></Image>
            <p className="spo">Home Painting</p>
         </Box>
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
            <DrawerHeader>Home Painting</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
                <p className="pi1" >Salon at home for Women <MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"></Image>
                <p className="pi1">Salon Classic   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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

  function Drawer8() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png"></Image>
            <p className="spo">Cleaning & Pest Control</p>
         </Box>
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
            <DrawerHeader>Cleaning & Pest Control</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
                <p className="pi1" >Salon at home for Women <MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"></Image>
                <p className="pi1">Salon Classic   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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



  function Drawer9() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg"></Image>
            <p className="spo">Electricians</p>
         </Box>
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
            <DrawerHeader>Electricians</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
                <p className="pi1" >Salon at home for Women <MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"></Image>
                <p className="pi1">Salon Classic   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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


  
  function Drawer10() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png"></Image>
            <p className="spo">Plumbers & Carpenters</p>
         </Box>
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
            <DrawerHeader>Plumbers & Carpenters</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
                <p className="pi1" >Salon at home for Women <MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"></Image>
                <p className="pi1">Salon Classic   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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


  
  function Drawer11() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
         <Box>
            <Image className="spi" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1640061770126-65f4a1.png"></Image>
            <p className="spo">Personal Chefs</p>
         </Box>
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
            <DrawerHeader>Personal Chefs</DrawerHeader>
  
            <DrawerBody>
              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
                <p className="pi1" >Salon at home for Women <MdArrowForwardIos className="md1"/></p>
                
              </Box>

              <Box className="box1">
                <Image className="bi1" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"></Image>
                <p className="pi1">Salon Classic   <MdArrowForwardIos className="md1" /></p>
              
              </Box>


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

  export{Drawer1,Drawer2,Drawer3,Drawer4,Drawer5,Drawer6,Drawer7,Drawer8,Drawer9,Drawer10,Drawer11}