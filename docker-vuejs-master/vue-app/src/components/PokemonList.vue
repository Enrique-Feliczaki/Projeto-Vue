<template>
    <div>
        <h1>Pokémon</h1>
        <div v-for="pokemon in pokemons" :key="pokemon.name">
            <button @click="selectPokemon(pokemon.name)">{{ pokemon.name }}</button>        
        </div>
        <button @click="loadMore">Carregar Mais</button>
    </div>

</template>
<script>
    import {fetchPokemons} from '../api';
    export default{
        data(){
            return{
                pokemons:[],
                offset: 0,
                limit:20
            };
        },
        async created(){
            this.pokemons = await fetchPokemons(this.offset,thsi.limit);
        },
        
        methods:{
            async loadMore(){
                this.offset += this.limit;
                const newPokemon = await fetchPokemons(this.offset,this.limit);
                this.pokemons.push(...newPokemon);
            },
            selectPokemon(name){
                this.$emit('select', name);
            }
        }
    };
</script>