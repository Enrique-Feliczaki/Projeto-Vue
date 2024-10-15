<template>
  <div id="app">
    <PokemonList @select="selectedPokemon" />
    <PokemonDetail v-if="selected" :name="selected"/>
  </div>
</template>
<script>
import PokemonList from './components/PokemonList.vue';
import PokemonDetail from './components/PokemonDetail.vue';

export default {
  components:{ PokemonList, PokemonDetail},
  data(){
    return{
      selected: null,
    };
  },
  methods:{
    selectedPokemon(name){
      this.selected = name;
    }
  }
};
</script>