<template>
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selection', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //recibimos el arreglo de pokemons
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  background-color: white;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  height: 40px;
}

li:hover {
  background-color: var(--water);
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
}

.options-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>