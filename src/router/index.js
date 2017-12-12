import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('@/page/login')), 'login')
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const space = r => require.ensure([], () => r(require('@/page/space')), 'space')
const topic = r => require.ensure([], () => r(require('@/page/topicview')), 'topic')
const manager = r => require.ensure([], () => r(require('@/page/manager')), 'manager')
const albumList = r => require.ensure([], () => r(require('@/page/albumlist')), 'albumList')
const activityList = r => require.ensure([], () => r(require('@/page/activitylist')), 'activityList')
const friendList = r => require.ensure([], () => r(require('@/page/friendlist')), 'friendList')
const albumPhoto = r => require.ensure([], () => r(require('@/page/albumphoto')), 'albumPhoto')
const user = r => require.ensure([], () => r(require('@/page/user')), 'user')
const search = r => require.ensure([], () => r(require('@/page/search')), 'search')


const test = r => require.ensure([], () => r(require('@/page/test')), 'test')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/topic',
      name: 'Topic',
      component: topic
    },
    {
      path: '/space',
      name: 'Space',
      component: space,
      children: [{
        path: '/album',
        component: albumList
      }, {
        path: '/activity/:uid',
        component: activityList,
        name:'Activity'
      }, {
        path: '/friend',
        component: friendList
      }, {
        path:'/photo/:aid／:albumName',
        name:'photoList',
        component: albumPhoto
      }]
    },
    {
      path: '/manager',
      name: 'Manager',
      component: manager
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path:'/user',
      name:'User',
      component: user
    },
    {
      path:'/search/:key',
      name:'Search',
      component:search
    }
  ]
})
