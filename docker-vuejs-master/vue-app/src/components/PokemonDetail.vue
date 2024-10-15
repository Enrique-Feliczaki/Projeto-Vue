<template>
    <div v-if="pokemon">
        <h2>{{ PokemonList.name }}</h2>
        <p>Esperiência Base {{ PokemonList.base_expirience }}</p>
        <h3>Habilidades:</h3>
        <ul>
            <li v-for="abillity in PokemonList.abilities" :key="abillity.abillity.name">
                {{ abillity.abillity.name }}(Hidden:{{ abillity.is_hidden }})
            </li>
        </ul>
        <button @click="toggleFavorite">Favoritar</button>
    </div>
</template>
<script>
    import { fetchPokemonDetails } from '../api';
    export default{
        props: ['name'],
        data(){
            return{
                pokemon: null,
                favorites: JSON.parse(localStorage.getItem('favorites')) || [],
            };
        },
        computed:{
            isFavorite(){
                return this.favorites.includes(this.pokemon?.name);
            }
        },
        watch:{
            name:'fetchData',   
        },
        methods:{
            async fetchData(){
                this.pokemon = await fetchPokemonDetails(this.pokemon.name);
            },
            toggleFavorite(){
                if (this.favorites){
                    this.favorites = this.favorites.filter(fav => fav !== this.pokemon.name);
                }
                else{
                this.favorites.push(this.pokemon.name);
                }
                localStorage.setItem('favorites', JSON.stringify(this.favorites));

            }
        },
    };
</script>