import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Baijiu from '@/components/baijiu'
import CLUB from '@/components/CLUB'
import Jingpin from '@/components/jingpin'
import Laojiu from '@/components/laojiu'
import Lingquan from '@/components/lingquan'
import Putaojiu from '@/components/putaojiu'
import Qingcang from '@/components/qingcang'
import Xijiu from '@/components/xijiu'
import Yangjiu from '@/components/yangjiu'
import Jumingjiu from '@/components/jumingjiu'
import Fenlei from '@/components/fenlei'
import User from '@/components/user'
import Register from '@/components/register'

import Loginuser from '@/components/module/user/loginUser'
import Loginphone from '@/components/module/user/loginPhone'



Vue.use(Router)

export default new Router({
  routes: [
    {
    path: "/home",
    component:Home

    },
    {
    path: "/baijiu",
    component:Baijiu

    },
    {
    path: "/club",
    component:CLUB

    },
    {
    path: "/jingpin",
    component:Jingpin

    },
    {
    path: "/jumingjiu",
    component:Jumingjiu

    },
    {
    path: "/laojiu",
    component:Laojiu

    },
    {
    path: "/lingquan",
    component:Lingquan

    },
    {
    path: "/putaojiu",
    component:Putaojiu

    },
    {
    path: "/qingcang",
    component:Qingcang

    },
    {
    path: "/xijiu",
    component:Xijiu

    },
    {
    path: "/yangjiu",
    component:Yangjiu

    },    
    {
    path: "/fenlei",
    component:Fenlei

    },
    //登录
    {
        path:"/user",
        component:User,
            children: [
                {
                     path: "loginuser",
                     component: Loginuser
                },
                {
                     path: "loginphone",
                     component: Loginphone

                },
                {
                    path: "/user",
                    redirect: "/user/loginuser"
                }
                 ]
    },
    //注册
    {
        path: "/register",
        component: Register

    },
    //重定向
    {
    path: "/",
    redirect: "/home"
    },


  ]
})
