<script >
import {store} from '../store';
import axios from 'axios';
import projectCard from './projectCard.vue';


export default{
    name:'MainVue',
    components:{
        projectCard
        
    },
    data(){
        return{
            store,
        }
    },
    mounted(){
        this.chiamataTutto()
    },
    methods:{
        chiamataTutto(){
            axios.get(`http://127.0.0.1:8000/api/projects`)
            .then((res)=>{
              this.store.project = res.data.results
              this.store.lenguages = res.data.results.lenguages
              this.store.genere = res.data.results.genere
              console.log(this.project)
            })
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <projectCard class="col-6" v-for="(elem, index) in store.project" :key="index" :cardProps="elem" />
        </div>
    </div>
</template>

<style scoped lang="scss">
    
</style>