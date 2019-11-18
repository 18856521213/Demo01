import Vue from 'vue'
import Router from 'vue-router'

import City from '@/components/bottomMenu/City.vue'
import House from '@/components/bottomMenu/House.vue'
import Mine from '@/components/bottomMenu/Mine.vue'

import CityComponents from '@/components/CityComponents/CityComponents.vue'
import HotComponents from '@/components/CityComponents/HotComponents.vue'
import WillComponents from '@/components/CityComponents/WillComponents.vue'
import SearchComponents from '@/components/CityComponents/SearchComponents.vue'


Vue.use(Router)

export default new Router({

  base:'demo',
  routes: [

    {path: '/city', component: City,

      children:[

        {path: 'cityComponents', component: CityComponents},
        {path: 'hotComponents', component: HotComponents},
        {path: 'willComponents', component: WillComponents},
        {path: 'searchComponents', component: SearchComponents},
        {
          path : '/city',
          redirect : 'hotComponents'
      }
      ]
      
    },
    {path: '/house', component: House},
    {path: '/mine', component: Mine},

    {//默认打来的页面的路由页面
      path : '/',
      redirect : '/city'
   }
  ]
})
