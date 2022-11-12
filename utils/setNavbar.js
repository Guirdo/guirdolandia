import Navbar from '../components/Navbar'

export default function setNavbar(position = 'header'){
    document.querySelector(position).innerHTML = Navbar()
}
