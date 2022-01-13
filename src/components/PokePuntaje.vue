<template>
  <div class="score">
    <p>High Score: {{ score }}</p>
    <p>Score: {{ newScore }}</p>
  </div>
</template>

<script>
export default {
  props: {
    newScore: {
      type: Number,
    },
  },
  data() {
    return {
      score: 0,
    };
  },

  mounted() {
    this.updatedLocalStorage();
  },
  updated() {
    this.saveScore();
  },
  methods: {
    updatedLocalStorage() {
      if (localStorage.getItem("score")) {
        try {
          this.score = JSON.parse(localStorage.getItem("score"));
          console.log(this.newScore);
        } catch (e) {
          console.log(e);
        }
      }
    },
    saveScore() {
      if (this.score < this.newScore) {
        const parsed = JSON.stringify(this.newScore);
        localStorage.setItem("score", parsed);
        this.updatedLocalStorage();
      }
    },
  },
};
</script>

<style>
</style>