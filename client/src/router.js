import { createWebHistory, createRouter } from "vue-router";
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Profile from './views/Profile.vue'

import Home from './views/Home.vue'
import AdminBoard from './views/AdminBoard.vue'
import ModBoard from './views/ModBoard.vue'
import UserBoard from './views/UserBoard.vue'

const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/profile",
      name: "profile",
      // lazy-loaded
      component: Profile,
    },
    {
      path: "/admin",
      name: "admin",
      // lazy-loaded
      component: AdminBoard,
    },
    {
      path: "/mod",
      name: "moderator",
      // lazy-loaded
      component: ModBoard,
    },
    {
      path: "/user",
      name: "user",
      // lazy-loaded
      component: UserBoard,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  // router.beforeEach((to, from, next) => {
  //   const publicPages = ['/login', '/register', '/home'];
  //   const authRequired = !publicPages.includes(to.path);
  //   const loggedIn = localStorage.getItem('user');
  
  //   // trying to access a restricted page + not logged in
  //   // redirect to login page
  //   if (authRequired && !loggedIn) {
  //     next('/login');
  //   } else {
  //     next();
  //   }
  // });
  
  export default router;