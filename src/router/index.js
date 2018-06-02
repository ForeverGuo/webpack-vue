import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Taste from '@/components/Taste'
import Shop from '@/components/Shop'
import Person from '@/components/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify	
    },
    {
      path: '/Taste',
      name: 'Taste',
      component: Taste	
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop	
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person	
    },
  ]
})
