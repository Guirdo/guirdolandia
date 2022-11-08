import Navbar from '../components/Navbar'

export default function setNavbar(){
    document.querySelector('header').innerHTML = Navbar()
}
