<script >
import { store } from '../store';
export default {
    name:'HeaderVue',
    components:{
      
    },
    data(){
      return{
          store
      }
    }
}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Portfolio di Simone</router-link>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
            <router-link class="nav-link" aria-current="page" to="/about">About</router-link>
          </div>
        </div>
      </div>
    </nav>
</template>

<style scoped lang="scss">
  
</style>