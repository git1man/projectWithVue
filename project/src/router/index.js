import {createRouter,createWebHistory} from "vue-router";


const Home=()=>import("../views/home.vue")

import Prodducts from "../views/product.vue";

import productDeatails from "../views/productDeatails.vue";
import addProduct from "../views/addProduct.vue";
import notFound from "../views/notFound.vue";
import editeProduct from "../views/editeProduct.vue";

const routes=[
    {path:"/", component:Home, alias:"/home",meta: { noMarginTop: true }},
    {path:"/products", component:Prodducts},
    {path:"/productDeatails/:id", component:productDeatails},
    {path:"/addProduct", component:addProduct},
    {path:"/editeProduct/:id", component:editeProduct},
    {
        path:"/:pathMatch(.*)*",
        component:notFound,
        meta:{
            hideNavBar:true,
            noMarginTop: true
        },
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes,
})
export default router;