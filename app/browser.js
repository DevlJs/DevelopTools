
import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import Main from './components/Main.vue'
import AddArticle from './components/AddArticle.vue'
import Article from './components/Article.vue'
import ManageFeed from './components/ManageFeed.vue'
import Tag from './components/Tag.vue'
import store from './store'
import { routerUse } from './router.js'
import { directiveUse } from './directive/index.js'
let $ = require('jquery'),
    select2 = require('select2');
Vue.use(Router);

var router = new Router({
  hashbang:false,
  abstract:true
})
routerUse(router);
directiveUse(Vue);
router.start(App,'#app')

store.actions.getFeed()
store.actions.getArticles()
store.actions.getTags()

