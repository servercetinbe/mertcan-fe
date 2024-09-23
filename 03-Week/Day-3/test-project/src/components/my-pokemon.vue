<script setup lang="ts">


import { ref } from 'vue'; // named import
import type { Ref } from 'vue';

interface Pokemon {
    name: string;
    url: string;
}

const pokemons: Ref<Pokemon[]> = ref([]);

async function getPokemon() {
    const data = await fetch('https://pokeapi.co/api/v2/');
    const pokemon = await data.json();

        console.log(pokemon);
        pokemons.value = pokemon.results;
}

</script>
<template>
    <button @click="getPokemon">Get Pokemon</button>
    <div  v-for="(pokemon,idx) in pokemons" :key="idx">
       
            <h4>{{ pokemon.name }}</h4>
            
           </div>       
      
</template>
