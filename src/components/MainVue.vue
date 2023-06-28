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
            })
        }
    }
}
</script>

<template>
    auiofbvkjasbrkgahrf
    <div class="container">
        <div class="row">
            <div class="col-2" v-for="(elem, index) in project" :key="index">
                <div class="card" style="width: 18rem;">
                    <img :src="`http://127.0.0.1:8000/storage/${elem.img}`" class="card-img-top" :alt="`${elem.title}`">
                    <div class="card-body">
                        <h5 class="card-title">{{ elem.title }}</h5>
                        <p class="card-text">{{ elem.description }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    
</style>