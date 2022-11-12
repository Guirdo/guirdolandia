const navbarItems = [
    {
        url: '/',
        label: '🏠Dulce Hogar'
    },
    {
        url: '/blog/index.html',
        label: '📓Blog'
    },
    {
        url: '/hyperlinks/index.html',
        label: '🔗Hipervinculos'
    },
    {
        url: '/not_found.html',
        label: '🛰️Miscelanea'
    },
    {
        url: '/guestbook/index.html',
        label: '🖋️Firma my guestbook'
    },
    {
        url: '/not_found.html',
        label: '👾Diario de sueños'
    },
    {
        url: '/not_found.html',
        label: '🤪Sobre mi'
    },
]

export default function Navbar() {

    return (`
    <nav class="navbar">  
        <ul class="navbar-list">
            ${navbarItems.map(item => (`
            <li class="navbar__item">
                <a class="navbar__link" href="${item.url}">
                    ${item.label}
                </a>
            </li>   
        `)).join('')}
            
        </ul>
    </nav>
`)

}