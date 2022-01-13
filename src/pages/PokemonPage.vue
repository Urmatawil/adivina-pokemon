<template>
  <PokePuntaje :newScore="score" />
  <div class="poke" v-if="!pokemonBlack">
    <h1>Cargando...</h1>
    <div class="pokeball">
      <div class="pokeball__button"></div>
    </div>
  </div>

  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>
    <!-- Componente imagen-->
    <PokemonImage :pokemonId="pokemonBlack.id" :showPokemon="showPokemon" />
    <!-- Componente detalles-->
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

    <div v-if="showPokemon" class="new-game fade-in">
      <h2>{{ message }}</h2>
      <button @click="newGame">Adivinar</button>
    </div>
  </div>
</template>

<script>
import PokemonImage from "@/components/PokemonImage";
import PokemonOptions from "@/components/PokemonOptions";
//importamos el dato de los pokemones que obtuvimos con axios
import randomPoke from "@/helpers/getRandomPoke";
import PokePuntaje from "@/components/PokePuntaje.vue";

export default {
  components: {
    PokemonImage,
    PokemonOptions,
    PokePuntaje,
  },
  //la data es un método que devuelve un objeto
  data() {
    return {
      pokemonArr: [],
      pokemonBlack: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      score: 0,
    };
  },
  //Creamos un método para manejar el resultado de randomPoke
  methods: {
    async randomPokemonArray() {
      this.pokemonArr = await randomPoke();
      setTimeout(() => {
        //generamos un numero aleatorio para sacar el pokemon a adivinar del arreglo
        const rndInt = Math.floor(Math.random() * 4);
        this.pokemonBlack = this.pokemonArr[rndInt];
      }, 800);
    },
    //método para determinar la respuesta al hacer click
    checkAnswer(selectedId) {
      this.showPokemon = true;
      if (selectedId === this.pokemonBlack.id) {
        this.message = `¡Correcto! Se trata de ${this.pokemonBlack.name}`;
        this.score = this.score + 1;
      } else {
        this.message = `¡Ooops! Se trataba de ${this.pokemonBlack.name}`;
        this.score = 0;
      }
    },
    //Nuevo juego
    newGame() {
      (this.pokemonBlack = null),
        (this.showPokemon = false),
        (this.showAnswer = false),
        (this.message = ""),
        this.randomPokemonArray();
    },
  },
  //cargamos el método cuando el componente sea montado
  mounted() {
    this.randomPokemonArray();
  },
};
</script>