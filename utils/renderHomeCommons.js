import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function renderHomeCommons() {
    document.querySelector('header').innerHTML = Header()
    document.querySelector('aside').innerHTML = Navbar()

    //First easteregg
    const affirmationFrog = document.querySelector('img.home__affirmation-frog')
    affirmationFrog.addEventListener('click', () => {
        window.location.href = '/easteregg/affirmation.html'
    })
}
