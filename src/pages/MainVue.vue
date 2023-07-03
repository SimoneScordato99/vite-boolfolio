<script >
import {store} from '../store';
import axios from 'axios';
import projectCard from '../components/projectCard.vue';


export default{
    name:'MainVue',
    components:{
        projectCard
        
    },
    watch: {
        selectedLenguage:{
            handler: 'chiamataTutto',
            deep: true	
        }
    },
    data(){
        return{
            store,

            
        }
    },
    mounted(){
        this.chiamataTutto(),
        this.getLenguage(),
        this.getGenere()
    },
    methods:{
        chiamataTutto(current_page){
            const params = {
                    page: this.store.current_page   
                }

            if(this.store.selectedGenere !== 'all'){
                params.genere_id = this.store.selectedGenere
            }
            if(this.store.selectedLenguage.lenght > 0){
                params.lenguages_ids = this.store.selectedLenguage.join(',');
            }

            axios.get(`http://127.0.0.1:8000/api/projects`, {params})
            .then((res)=>{
              this.store.project = res.data.results.data
              this.store.lenguages = res.data.results.lenguages
              this.store.generes = res.data.results.genere
              this.store.current_page = res.data.results.current_page
              this.store.last_page = res.data.results.last_page

            })
        },
        getGenere(){
            axios.get(`http://127.0.0.1:8000/api/genere`).then(res => {
                this.store.genere = res.data.genere
            })
        },
        getLenguage(){
            axios.get(`http://127.0.0.1:8000/api/lenguage`).then(res => {
                this.store.lenguage = res.data.lenguage
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
            <div class="mb-3">
                <label for="genere" class="form-label">Genere</label>
                <select @change="chiamataTutto()" v-model="this.store.selectedGenere" class="form-select form-select-lg" name="" id="genere">
                    <option value="all">--Select All---</option>
                    <option :value="elem.id" v-for="(elem, index) in store.genere" :key="index">
                        {{ elem.name }}
                    </option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="mb-3">
            <h2>Lenguages</h2>
            <div class="form-group" v-for="(elem, index) in this.store.lenguage" :key="index">
                <input type="checkbox" name="" :id="elem.name" :value="elem.id" v-model="this.store.selectedLenguage">
                <label :for="elem.name" class="ms-2">
                    {{ elem.name }}
                </label>
            </div>
        </div>
        </div>
        <div class="row">
            <projectCard class="dividendo" v-for="(elem, index) in store.project" :key="index" :cardProps="elem" />
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