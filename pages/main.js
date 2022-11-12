import News from '../components/News'
import '../styles/global.css'
import setNavbar from '../utils/setNavbar'

setNavbar('aside')

document.querySelector('div.home-news').innerHTML = News()

//First easteregg
const affirmationFrog = document.querySelector('img.home__affirmation-frog')
affirmationFrog.addEventListener('click',()=> {
    window.location.href = '/easteregg/affirmation.html'
})

