import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import {getBranch} from '../service/branch.js'

Vue.use(Vuex)

const GET_FEED = 'GET_FEED'
const ADD_FEED = 'ADD_FEED'
const REMOVE_FEED = 'REMOVE_FEED'

const state = {
    feeds: []
}

const actions = {
    addFeed: ADD_FEED,
    getFeed: GET_FEED,
    removeFeed: REMOVE_FEED,
}

const mutations = {
    [GET_FEED](state) {
        state.feeds = getBranch();
    }, [REMOVE_FEED](state, id) {
        let index = _.findIndex(state.feeds, '_id', id);
        service.deleteFeed(id);
        state.feeds.splice(index, 1)
    }, [ADD_FEED](state, feed, callback) {
        service.addFeed(feed, function(docs) {
            state.feeds.unshift(docs)
            callback(docs)
        })
    }
}

export
default new Vuex.Store({
    state,
    actions,
    mutations
})