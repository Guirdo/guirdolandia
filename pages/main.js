import News from '../components/News'
import '../styles/global.css'
import renderHomeCommons from '../utils/renderHomeCommons'

renderHomeCommons()

document.querySelector('div.home-news').innerHTML = News()



