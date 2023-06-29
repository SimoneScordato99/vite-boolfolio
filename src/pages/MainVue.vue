<script >
import {store} from '../store';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';


export default{
    name:'MainVue',
    components:{
        ProjectCard
        
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
        chiamataTutto(current_page){
            axios.get(`http://127.0.0.1:8000/api/projects`, { 
                params:{
                    page: this.store.current_page
                }})
            .then((res)=>{
              this.store.project = res.data.results.data
              this.store.lenguages = res.data.results.lenguages
              this.store.genere = res.data.results.genere
              this.store.current_page = res.data.results.current_page
              this.store.last_page = res.data.results.last_page
              console.log(this.project)
            })
        },
        next(){
            this.store.current_page = this.store.current_page + 1;
            if (this.store.current_page == this.store.last_page + 1) {

                return this.store.current_page = 1;
            }
        },
        prev(){
            this.store.current_page = this.store.current_page - 1;
            if (this.store.current_page == 0) {

                return this.store.current_page = this.store.last_page;
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <ProjectCard class="dividendo" v-for="(elem, index) in store.project" :key="index" :cardProps="elem" />
        </div>
        <div class="row">
            <nav aria-label="Page navigation example col-6">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" @click.prevent="prev(), chiamataTutto(current_page)">Previous</a>
                    </li>
                    
                    <li class="page-item">
                        <a class="page-link" href="#" @click.prevent="next(), chiamataTutto(current_page)">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .row{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .pagination{
            margin: 30px 0;
            display: flex;
            justify-content: center;
        }
    }
    .dividendo{
        
        width: calc((100% / 2) - 50px);
    }
</style>