import '../../styles/global.css'
import postDB from '../../data/posts.json' assert {type: 'json'}

const posts = postDB.posts

const blogList = document.querySelector('.blog-list')

blogList.innerHTML = posts.map(p => (`
<li class="blog__item">
    <a class="blog__link" href="/blog/post/${p.slug}.html">
        ${p.title}
    </a>
    <span class="blog__date">${p.date}</span>
</li>
`))