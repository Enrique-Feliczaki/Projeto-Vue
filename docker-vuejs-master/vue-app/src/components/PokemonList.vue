<template>
    <div>
        <h1>Pokémon</h1>
        <div class="pokemon-list">
            <div v-for="pokemon in pokemons" :key="pokemon.name" class="pokemon-item">
                <button @click="selectPokemon(pokemon.name)">{{ pokemon.name }}</button>        
            </div>
         </div>
        <Pagination :currentPage = "currentPage" :totalPages = "totalPages" @changePage="changePage"/>
    </div>
</template>

<script>
    import {fetchPokemons} from '../api';
    import Pagination from './Pagination.vue';

    export default{
        components:{Pagination},
        data(){
            return{
                pokemons:[],
                offset: 0,
                limit:20,
                currentPage: 1,
                totalPages: 0,
            };
        },
        async created(){
            await this.loadPokemons();
        },
        
        methods:{
            async loadPokemons(){
                this.pokemons = await fetchPokemons(this.offset, this.limit)
                this.totalPages = Math.ceil(1118/this.limit);
            },
            selectPokemon(name){
                this.$emit('select', name);
            },
            changePage(page){
                this.currentPage = page;
                this.offset = (page - 1) * this.limit;
                this.loadPokemons();
            }
        }
    };
</script>

<style scoped>
    pokemon-list{
        display: flex;
        flex-wrap: wrap;
    }
    pokemon-item{
        margin: 10px;
    }
</style>