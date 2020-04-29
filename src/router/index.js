import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VHtml from '@/components/vHtml'
import viewHtml from '@/components/ViewHtml'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sb',
      name: 'sb',
      component: VHtml
    },
    {
      path: '/viewHtml',
      name: 'viewHtml',
      component: viewHtml
    }
  ]
})
