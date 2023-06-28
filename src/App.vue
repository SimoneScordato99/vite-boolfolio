<script >
import HeaderVue from './components/Header.vue';
import MainVue from './components/MainVue.vue';
import axios from 'axios';
import { store } from './store';

export default{
  name:'app',
  components:{
    HeaderVue,
    MainVue
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
    <MainVue/>
  </div>
</template>

<style lang="scss">
@use './style/main.scss';

  .webApp{
    
  }

</style>
