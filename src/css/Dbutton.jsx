import React from 'react'
import { Box,Button,Image,Input } from '@chakra-ui/react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  
  } from '@chakra-ui/react'

  import { RiArrowDownSLine } from 'react-icons/ri';



const Dbutton1 = () => {
  return (
    <div>
      
      <Box >
      <Menu>
  <MenuButton  br="white" className='but1' >
  <p className='A1'>    BEAUTY <RiArrowDownSLine className='ri23'/></p>
  </MenuButton>
  <MenuList>
    <MenuItem>Hair Care</MenuItem>
    <MenuItem>Make Up</MenuItem>
    <MenuItem>Skincare</MenuItem>
   
  </MenuList>
</Menu>

      </Box>

    </div>
  )
}


const Dbutton2 = () => {
    return (
      <div>
        
        <Box >
        <Menu>
    <MenuButton  br="white" className='but1' >
    <p className='A1'>  MEN <RiArrowDownSLine className='ri23'/></p>
    </MenuButton>
    <MenuList>
      <MenuItem>Grooming</MenuItem>
      <MenuItem>Skincare</MenuItem>
      <MenuItem>Hair care</MenuItem>
     
    </MenuList>
  </Menu>
  
        </Box>
  
      </div>
    )
  }


  
const Dbutton3 = () => {
    return (
      <div>
        
        <Box >
        <Menu>
    <MenuButton  br="white" className='but1' >
    <p className='A1'>  INTERIORS <RiArrowDownSLine className='ri23'/></p>
    </MenuButton>
    <MenuList>
      <MenuItem>Decor & Style</MenuItem>
      <MenuItem>Kitchens</MenuItem>
      <MenuItem>Bathrooms</MenuItem>
      <MenuItem>Bedrooms</MenuItem>
      <MenuItem>Living Rooms</MenuItem>
      <MenuItem>Dining Rooms</MenuItem>
      <MenuItem>Other Areas</MenuItem>
      <MenuItem>Real Home Tours</MenuItem>
      <MenuItem>Homecare</MenuItem>
     

    </MenuList>
  </Menu>
  
        </Box>
  
      </div>
    )
  }


  
const Dbutton4 = () => {
    return (
      <div>
        
        <Box >
        <Menu>
    <MenuButton  br="white" className='but1' >
    <p className='A1'>  LIFESTYLE <RiArrowDownSLine className='ri23'/></p>
    </MenuButton>
    <MenuList>
      <MenuItem>Health & Wellness</MenuItem>
      <MenuItem>Party</MenuItem>
      <MenuItem>Weddings</MenuItem>
     
    </MenuList>
  </Menu>
  
        </Box>
  
      </div>
    )
  }


 




export{Dbutton1,Dbutton2,Dbutton3,Dbutton4}
