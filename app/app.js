'use strict';
const app = require('remote').require('app')
const jetpack = require('fs-jetpack').cwd(app.getAppPath())
const fs = {}
const useDataDir = jetpack.cwd(app.getPath("userData"))
const $ = require('jquery')
const select2 = require('select2')
import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import store from './store'
import { routerUse } from './router.js'
import { directiveUse } from './directive/index.js'

// Check if directory for storing article exists or not
var dirYes = jetpack.exists(useDataDir.path('streams'))
var dirFavi = jetpack.exists(useDataDir.path('favicons'))

if(!dirYes){
  fs.mkdir(useDataDir.path('streams'))
}
if(!dirFavi){
  fs.mkdir(useDataDir.path('favicons'))
}
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

