<template>
    <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <!-- logo -->
        <h1 class="w-3/12">
           Storelytic
        </h1>

        <!-- navigation -->
        <nav class="nav font-semibold text-lg">
            <ul class="flex items-center">
                <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                    <router-link to="/home" class="nav-link">Home</router-link>
                </li>
                <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"  v-if="showAdminBoard">
                    <router-link to="/admin" class="nav-link">Admin Board</router-link>
                </li>
                <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer" v-if="showModeratorBoard">
                    <router-link to="/mod" class="nav-link">Moderator Board</router-link>
                </li>
                <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
                </li>
            </ul>
        </nav>

        <!-- buttons --->
        <div class="w-3/12 flex justify-end" v-if="!currentUser">
               
            <router-link to="/register" class="m-2"> 
              Sign Up
            </router-link>
           
            <router-link to="/login" class="m-2">
                Login
            </router-link>
        </div>
        <!-- btn-->
        <div class="w-3/12 flex justify-end" v-if="currentUser">
               <div>
                  <router-link to="/profile" class="m-2">
                    {{ currentUser.username }}
                  </router-link>
               </div>
               <div>
                  <a class="m-2" @click.prevent="logOut">
                      LogOut
                  </a>
               </div>
           </div>
    </header>
</template>

<script>
  export default {
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      showAdminBoard() {
        if (this.currentUser && this.currentUser['roles']) {
          return this.currentUser['roles'].includes('ROLE_ADMIN');
        }
        return false;
      },
      showModeratorBoard() {
        if (this.currentUser && this.currentUser['roles']) {
          return this.currentUser['roles'].includes('ROLE_MODERATOR');
        }
        return false;
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  };
  </script>