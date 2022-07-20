import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home(){
    return(
        <div>
            
            <Box>
                <Navbar/>
            </Box>

            <Box>
            <Footer/>
            </Box>
        </div>
    )
}