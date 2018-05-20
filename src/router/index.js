import Vue from 'vue'
import Router from 'vue-router'
import Upload from '../components/upload'
import geturl from  '../components/photorender/geturl'
Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Upload',
      component:Upload,
    },
    {
      path:'/photorender',
      name:'geturl',
      component:geturl
    }
  ]
})
