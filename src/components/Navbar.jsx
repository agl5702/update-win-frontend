import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import {

  Button,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Heading, 
  Flex,
  Image
} from '@chakra-ui/react';
import logo from '../assets/logo.png'
import Sidebar from './Sidebar';

const images = [logo];
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isAuthenticated}=useAuth0();
  const navigate= useNavigate();
  
  return (
    <Flex  bgGradient='linear(to-r, white,blue.200,#2A4365)' as='nav' p='10px' justify='space-between' maxH='100px' wrap='wrap' gap='2' margin='auto' alignItems='center' boxShadow='2xl' border='none'> 
        <Heading alignItems='center' display='flex' as='h1' textAlign='left' fontSize='50px'>Win
        <Image  width='100px' my='0' src={images} alt=""/>
        </Heading>
        
      

        <Box display='flex' alignItems='center' alignContent='center'>
        {isAuthenticated ?<LogoutButton/>
        :<LoginButton/>}
       
        <Button display={{lg:'none', base:'flex'}} m='15px' leftIcon={<FaBars />} color='black' onClick={onOpen} alignItems='center'>
      </Button>
        <Drawer isOpen={isOpen} placement='right' onClose={() => { onClose(); navigate('/'); }}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bg='.200' />
          <DrawerHeader borderBottomWidth='1px' bg='green.100'>
            Menú
          </DrawerHeader>

          <DrawerBody bg='green.200' >
            <Box >
            <Sidebar onClose={onClose}/>
            </Box>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px' bg='green.100' colorScheme='teal'>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </Box>
        
       
        
        
      
    </Flex>
  )
}
