import { all } from "axios";
import { reactive } from "vue";

export const store = reactive(
    {
        project:[],
        lenguages:[],
        generes:[],
        current_page:null,
        last_page:null,
        genere:[],
        selectedGenere: 'all',
        lenguage:[],
        selectedLenguage: [],
        
    }
)

