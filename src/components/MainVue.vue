<script >
import {store} from '../store';
import axios from 'axios';


export default {
    name:'MainVue',
    components:{
        
    },
    data(){
        return{
            store,
            project:[],
            lenguages:[],
            generes:[]
        }
    },
    mounted(){
        this.chiamataTutto()
    },
    methods:{
        chiamataTutto(){
            axios.get(`http://127.0.0.1:8000/api/projects`)
            .then((res)=>{
              this.project = res.data.results
              this.lenguages = res.data.results.lenguages
              this.genere = res.data.results.genere
            })
        }
    }
}
</script>

<template>
    auiofbvkjasbrkgahrf
    <div class="container">
        <div class="row">
            <div class="col-6" v-for="(elem, index) in project" :key="index">
                <div class="card">
                    <img :src="`http://127.0.0.1:8000/storage/${elem.img}`" class="card-img-top" :alt="`${elem.title}`">
                    <div class="card-body">
                        <h5 class="card-title">{{ elem.title }}</h5>
                        <p class="card-text">{{ elem.description }}</p>
                        <p class="card-text text-success">{{ elem.genere.name }}</p>
                        <ul class="list-group my-3" v-for="(eleme, index) in elem.lenguages" :key="index">
                            <li class="list-group-item" >{{ eleme.name }}</li>
                        </ul>
                        <a href="#" class="btn btn-primary">Approfondisci</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    
</style>