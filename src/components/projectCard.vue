<script>
import {store} from '../store';

export default{
  name: "ProjectCard",
  props:[
    'cardProps'
  ],
  components:{
    
  },
  data(){
      return{
        store,
      }
    }
}
</script>

<template>
    <div class="card">
        <img :src="`http://127.0.0.1:8000/storage/${cardProps.img}`" class="card-img-top" :alt="`${cardProps.title}`">
        <div class="card-body">
            <h5 class="card-title">{{ cardProps.title }}</h5>
            <p class="card-text">{{ cardProps.description }}</p>
            <p class="card-text text-success">{{ cardProps.genere.name }}</p>
            <ul class="list-group my-3">
                <li class="list-group-item" v-for="(eleme, index) in cardProps.lenguages" :key="index" >{{ eleme.name }}</li>
            </ul>
            <a href="#" class="btn btn-primary">Approfondisci</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .card{
    margin: 25px 0;
  }
</style>