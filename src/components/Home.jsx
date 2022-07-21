import { Box,Image,Input,Button  } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home(){
    return(
        <div>
            
            <Box>
                <Navbar/>
            </Box>


<Box className="H">
        <Box className="h1">
                <Box className="h2"><Image src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg"></Image></Box>
                <Box className="h21">
                    <p className="hp">  URBAN COMPANY</p>
                    <h1 className="hp1">Quality home services,on demanand</h1>
                 
                    <p className="hp2">Experienced, hand-picked Professionals to serve you at your doorstep </p>
                 
                    
                    <Box className="wh">

                        <h1 className="wh1">Where do you need a service?</h1>
                    <select name="" className="se">
                    <option className="se1" value="">Select Your City</option>
                                     <option className="se1"  value=""> 
                                     
                                     Australia</option>
                        <option className="se1"  value="">Sydney</option>
                        <option className="se1"  value="">Melbourne</option>
                                     <option className="se1"   value=""> India</option>
                        <option className="se1"  value="">Ahmedabad</option>
                        <option className="se1"  value="">Bangalore</option>
                        <option value="">Chennai</option>
                        <option value="">Delhi NCR</option>
                        <option value="">Chandigarh Tricity</option>
                        <option value="">Jaipur</option>
                        <option value="">Udaipur</option>
                        <option value="">Hyderabad</option>
                        <option value="">Kolkata</option>
                        <option value="">Munbai</option>
                        <option value="">Pune</option>
                        <option value="">Nagpur</option>
                        <option value="">Ludhiana</option>
                        <option value="">Visakhapatnam</option>
                        <option value="">Vadodara</option>
                        <option value="">Lucknow</option>
                        <option value="">Kochi</option>
                        <option value="">Bhubaneswar</option>
                        <option value="">Kanpur</option>
                        <option value="">Surat</option>
                        <option value="">Indore</option>
                        <option value="">Agra</option> 
                         <option value="">Bhopal</option>
                         <option value="">Guwahati</option>
                         <option value="">VijayaWada</option>
                         <option value="">Varanasi</option>
                         <option value="">Coimbatore</option>
                         <option value="">Nashik</option>
                         <option value="">Ranchi</option>
                         <option value="">Aurangabad</option>
                         <option value="">Alwar</option>
                                        <option value="">KSA</option>
                         <option value="">Riyadh</option>
                         <option value="">Jeddah</option>
                                         <option value="">Singapore</option>
                        <option value="">Singapore</option>
                                             <option value="">UAE</option>
                        <option value="">Dubai</option>
                        <option value="">Abu Dhabi</option>                 
                        <option value="">Sharjah</option>
                                            <option value="">United States</option>
                        <option value="">Austin</option>
                     
                    </select>
                    </Box>
                </Box>

               
        </Box>
</Box>

<Box className="H2">
    <Box className="hw">
    <h2 className="wh2">Why Urban Company?</h2>

    <Box className="t1">
        <Box className=""><Image className="ti" src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png"></Image></Box>
        <Box className="t11">
            <h3 className="h3">Transparent pricing</h3>
            <p className="ph3">See fixed prices before you book. No hidden charges</p>
        </Box>
    </Box>

    <Box className="t1">
        <Box className=""><Image className="ti" src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2cc7d0d0.png"></Image></Box>
        <Box className="t11">
            <h3 className="h3">Experts only</h3>
            <p className="ph3">Our professionals are well trained and have on-job expertise.</p>
        </Box>
    </Box>

    <Box className="t1">
        <Box className=""><Image className="ti" src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2caafa00.png"></Image></Box>
        <Box className="t11">
            <h3 className="h3">Fully equipped</h3>
            <p className="ph3">We bring everything needed to get the job done well.</p>
        </Box>
    </Box>
    </Box>
    <Box className="hw">
        <Box className="bp">
            <Image className="ti1" src="https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png"></Image>
            <h1 className="wh2">100% Quality Assured</h1>
            <p className="qp">If You don't love our service, we will make it right.</p>
        </Box>
    </Box>
</Box>

<hr className="line1"/>
<Box className="Outb">
    <Box className="Outb1">
    <h1 className="wh2">Book professionals from your </h1>
    <h1 className="wh2"> phone</h1>
     <p className="qp">Enter your mobile number to get the App download link.</p>
    
    <Box className="inp">
      
        <Input></Input>
        <Button className="sb">Send</Button>
    </Box>

    <Box className='foo22'>

<Image className="sr" src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"></Image>
<Image className="sr" src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"></Image>
</Box>

    </Box>
    
    
    <Box className="Outb12">
        <Image className="Outi" src="https://res.cloudinary.com/urbanclap/image/upload/w_300,f_auto/categories/category_v2/category_2d7045d0.png"></Image>
        <Image className="Outi" src="https://res.cloudinary.com/urbanclap/image/upload/w_350,f_auto/categories/category_v2/category_2d013050.png"></Image>
    </Box>
</Box>

            <Box>
            <Footer/>
            </Box>
        </div>
    )
}