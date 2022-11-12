import news from "../data/news"

export default function News() {
    return (`
        <div>
            ${news.map(n => (`
                <h3>🗓️ ${n.date.toLocaleDateString()}</h3>
                <ul className="home-news-list" style="margin-left: 32px;">
                    ${n.content.map(c =>(`
                        <li className="home-news__item">${c}</li>
                    `)).join('')}
                </ul>
            `)).join('')}
            <hr/>
        </div>
    `)
}