<script >
import HeaderVue from './components/HeaderVue.vue';
import axios from 'axios';
import { store } from './store';

export default{
  name:'app',
  components:{
    HeaderVue,
},
  data(){
      return{
          store
      }
  },
  created(){

  },
  methods:{
 
  }
}
</script>

<template>
  <div class="webApp">
    <HeaderVue/>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './style/main.scss';



</style>
