
import Main from './components/Main.vue'
import AddArticle from './components/AddArticle.vue'
import Article from './components/Article.vue'
import ManageFeed from './components/ManageFeed.vue'
import Tag from './components/Tag.vue'

export routerUse(router) {
    router.map({
        '/:type/:name': {
            component: Main
        },
        '/tags/': {
            component: Tag
        },
        '/article/add': {
            component: AddArticle
        },
        '/manage/feeds': {
            component: ManageFeed
        },
        '/': {
            component: Main
        },
    })
}