<template>
  <div class="pokemon-container">
    <!--tomamos el src desde la función computada-->
    <img :src="imgSrc" alt="Pokemon" class="hidden-pokemon" />
    <img v-if="showPokemon" :src="imgSrc" alt="Pokemon" class="fade-in" />
  </div>
</template>

<script>
export default {
  //recibimos el id desde pokemonPage
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    //función computada
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.pokemon-container {
  display: flex;
  height: 200px;
  justify-content: center;
}

.hidden-pokemon {
  filter: brightness(0);
}

img {
  height: 200px;
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>