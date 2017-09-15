import Vue from "vue";
import Router from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
//import index from "./component/index.vue";
var index = resolve => require(['./component/index.vue'], resolve)
//一级路由
// import dirco from "./component/yi/dirco.vue";
// import me from "./component/yi/me.vue";
// import login from "./component/yi/login.vue";
// import home from "./component/yi/home.vue";
var dirco = resolve => require(['./component/yi/dirco.vue'], resolve)
var me = resolve => require(['./component/yi/me.vue'], resolve)
var login = resolve => require(['./component/yi/login.vue'], resolve)
var home = resolve => require(['./component/yi/home.vue'], resolve)

//二级路由

// import fenlei from "./component/er/fenlei.vue";
// import guangbo from "./component/er/guangbo.vue";
// import jinpin from "./component/er/jinpin.vue";
// import remen from "./component/er/remen.vue";
// import zhibo from "./component/er/zhibo.vue";
var fenlei = resolve => require(['./component/er/fenlei.vue'], resolve)
var guangbo = resolve => require(['./component/er/guangbo.vue'], resolve)
var jinpin = resolve => require(['./component/er/jinpin.vue'], resolve)
var remen = resolve => require(['./component/er/remen.vue'], resolve)
var zhibo = resolve => require(['./component/er/zhibo.vue'], resolve)
//三级路由
//import Class from "./component/class.vue";
var Class = resolve => require(['./component/class.vue'], resolve)


let router = new Router({
    linkActiveClass: "active",
     
    routes: [
        {
            name: "index",
            path: "/",
            component: index,
            redirect: "/home/fenlei",
            children: [
                {
                    name: "dirco",
                    path: "dirco",
                    component: dirco
                },
                {
                    name: "me",
                    path: "me",
                    component: me
                },
                {
                    name: "login",
                    path: "login",
                    component: login
                },
                {
                    name: "home",
                    path: "home",
                    component: home,
                    children: [
                        {
                            name: "fenlei",
                            path: "fenlei",
                            component: fenlei,
                        },
                        {
                            name: "guangbo",
                            path: "guangbo",
                            component: guangbo
                        },
                        {
                            name: "jinpin",
                            path: "jinpin",
                            component: jinpin
                        },
                        {
                            name: "remen",
                            path: "remen",
                            component: remen
                        }, {
                            name: "zhibo",
                            path: "zhibo",
                            component: zhibo
                        }
                    ]
                }
            ]
        },
        {
            name: "class",
            path: "/class",
            component: Class
        }
            


    ]
})


Vue.use(Router)
Vue.use(VueAxios,axios)
new Vue({
    el: "#app",
    router,
    data() {
        return {

        }
    }
})
