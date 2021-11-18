import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Products from "@/views/Products"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/hiqu/dist",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/products",
            name: "Products",
            component: Products
        }
    ],
});

export default router;