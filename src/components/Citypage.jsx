import { Box,Button,Image,Input } from '@chakra-ui/react'
import React from 'react'

import Navbar from './Navbar'


import { Drawer1, Drawer10, Drawer11, Drawer2, Drawer3, Drawer4, Drawer5, Drawer6, Drawer7, Drawer8, Drawer9 } from '../css/Drawer'
import  { Slideshow1, Slideshow2 } from '../css/Slideshow'
import Footer from './Footer'


const Citypage = () => {
  return (
    <div>
      <Box>
        
        <Box className='cp'>
        <Navbar />
            <Image className='ci' src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_cd092030.jpeg"></Image>
            <Box className='na'>

                <h1 className='homeh'>Home services, on demand.</h1>
               <Box className='pun'>
                <Button className='pb1'>Pune</Button>
                <Box className='oi'> <Input ></Input></Box>

               </Box>
               

                <a className='aw' href="/">Women's Therapies, Salon for Men, Men's Therapies etc</a>
               
            </Box>
        </Box>

        
      </Box>



<Box className='re' boxShadow="md">

<Box >

<Drawer1 />
<Drawer2/>
<Drawer3/>
<Drawer4/>
<Drawer5/>
<Drawer6/>

</Box>

<Box className='re1'>
  <Drawer7/>
<Drawer8/>
<Drawer9/>
<Drawer10/>
<Drawer11/>
</Box>



</Box>

<Box><Slideshow1/></Box>
<hr  className='line31' />

<Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/luminosity/1657722528493-1dcc3b.jpeg"></Image>

<hr  className='line31' />

<h1 className='newh1'>New Category Launches</h1>

<Box className='sew1'>
  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140571372-aa78b8.png"></Image>
    <p className='ipg1'>Hair Studio Women</p>
  </Box>

  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1634213703742-6b4c23.jpeg"></Image>
    <p className='ipg1'>Massage For Men Ayurveda</p>
  </Box>

  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1633451331611-b1d2ef.png"></Image>
    <p className='ipg1'>Nail Studio For Women</p>
  </Box>

  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg"></Image>
    <p className='ipg1'>Buy Ro Water Purifier</p>
  </Box>
</Box>

<hr  className='line31' />

<Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1602763387610-2c1c7e.jpeg"></Image>

<hr  className='line31' />

<h1 className='newh1'>Appliances</h1>
<p className='rep1'>Servicing,Repair,Installation & Uninstallation</p>



<Box className='sew1'>
  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bf5acc80.png"></Image>
    <p className='ipg1'>Refrigerator</p>
  </Box>

  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png"></Image>
    <p className='ipg1'>Geyser</p>
  </Box>

  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png"></Image>
    <p className='ipg1'>Water Purifier</p>
  </Box>

  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_b78221c0.png"></Image>
    <p className='ipg1'>Washing Machine</p>
  </Box>
</Box>

<hr  className='line31' />


<h1 className='newh1'>Salon,Spa and Massage services</h1>
<p className='rep1'>Hygienic & Single use products | Low-contact services</p>



<Box className='sew1'>
  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
    <p className='ipg1'>Salon Prime</p>
    <p className='ipg2'>Up to 50% off</p>
  </Box>

  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1622105908059-580fda.jpeg"></Image>
    <p className='ipg1'>Salon For Men</p>
    <p className='ipg2'>Flat ₹100 off</p>
  </Box>

  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png"></Image>
    <p className='ipg1'>Spa For Women</p>
    <p className='ipg2'>Free head massage</p>
  </Box>

  <Box>
    <Image className='img1' src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg"></Image>
    <p className='ipg1'>Massage For Men</p>
    <p className='ipg2'>starts at ₹499 </p>
  </Box>
</Box>

<hr  className='line31' />

<h1 className='newh1'>Cleaning & Pest Control</h1>


<Box><Slideshow2/></Box>

<hr  className='line31' />
<Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_a4e46fa0.png"></Image>
<hr  className='line31' />

<Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1624344861242-558286.png"></Image>
<hr  className='line31' />

<Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_3cffdf20.png"></Image>
<hr  className='line31' />
<Box className='foo112'><Footer/></Box>

      
    </div>
  )
}

export default Citypage



