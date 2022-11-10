import news from "../data/news"

export default function News() {
    return (`
        <div>
            ${news.map(n => (`
                <h3>${n.date.toLocaleDateString()}</h3>
                <ul style="margin-left: 32px;">
                    ${n.content.map(c =>(`
                        <li>${c}</li>
                    `)).join('')}
                </ul>
            `)).join('')}
            <hr/>
        </div>
    `)
}