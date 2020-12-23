<template>
  <div>
    <b-container class="p-3 bg-secondary home-view rounded">
      <b-row>
        <div id="blue-ball" class="bg-primary rounded-circle m-4" />
        <div class="tiny-balls bg-danger rounded-circle mr-1 mt-4" />
        <div class="tiny-balls bg-warning rounded-circle mr-1 mt-4" />
        <div class="tiny-balls bg-success rounded-circle mr-1 mt-4" />
      </b-row>
      <b-row> </b-row>
      <b-row> </b-row>
    </b-container>
    <div class="space">
      <p>Hello {{ name }}</p>
      <h3 v-if="red" class="red">Mike have a red ball</h3>
      <h3 v-else-if="green" class="green">Monika have a green ball</h3>
      <h3 v-else-if="yellow" class="yellow">Caren have a yellow ball</h3>
      <h3 v-else>Phil have no ball</h3>
      <button v-on:click="aClickHandler('Hello!')">button 1</button>
      <button @click="aClickHandler('Hello!')">button 2</button>
      <form>
        <input v-model="name" />
        <input type="checkbox" v-model="checked" />
        <button type="submit" @click.prevent="aClickHandler('Hi')">
          <!-- prevent reloading the page -->
          Button Submit
        </button>
      </form>
    </div>
    <div>
      <ul>
        <li v-for="item in items" :key="item.index">
          {{ item }}
        </li>
      </ul>
      <ul :class="{darkTheme: isDark}">
        <li v-for="dog in dogs" :key="dog.index">
          <!-- <p :style="{color: dog.color}">Dog "{{ dog.name }}" is a {{ dog.type }} and has a color: {{dog.color}}</p> -->
          <p :class="dog.color">Dog "{{ dog.name }}" is a {{ dog.type }} and has a color: {{dog.color}}</p>

        </li>
      </ul>
      <button @click="isDark =!isDark">ENTER DARKNESS</button>
    </div>
    <form @submit="formSubmit">
      <input v-model="searchQuery" />
      <button type="submit" @click.prevent="aClickHandler('Hi')">
        <!-- prevent reloading the page -->
        Search
      </button>
      <button type="submit" @click.prevent="resetForm">reset</button>
    </form>
     <h2>{{ title }}</h2>
       <h2 v-for="pokemon in fieryPokemons" :key="pokemon.index">
      {{ pokemon }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isDark: false,
      searchQuery: "",
      name: "Lili",
      red: true,
      surname: "Pipi",
      green: false,
      yellow: false,
      items: ["item1", "item2", "item3", "item4", "item5", "item6"],
      checked: true,
      pokemons: ["charmander", "squirtle", "bulbasaur"],
      dogs: [
        { name: "How", type: "labrador", color: "brown" },
        { name: "Mimi", type: "chow-chow", color: "black" },
        { name: "Luca", type: "german shephard" , color: 'red' },
        { name: "Luca", type: "swiss shephard", color: "gray" },
      ],
    };
  },
  computed: {
    title(){
      return this.name + ' ' + this.surname;
    },
    fieryPokemons() {
      return this.pokemons.filter(this.isFiery);
    },
  },
  methods: {
    resetForm() {
      this.searchQuery = "";
    },
    aClickHandler() {
      alert("I have been clicked " + this.searchQuery);
    },
    formSubmit() {
      alert(`Searched: ${this.searchQuery}`);
    },
     isFiery(value) {
      return value.includes("char");
    },
  },
};
</script>

<style lang="scss">
#blue-ball {
  height: 70px;
  width: 70px;
  border: 10px solid lightgrey;
}

.tiny-balls {
  height: 20px;
  width: 20px;
  border: 1px solid black;
}

.home-view {
  border: 3px solid black;
}
.space {
  margin-left: 50px;
}
.red {
  color: rgb(80, 41, 255);
}
.green {
  color: green;
}
.brown {
  color: rgb(71, 165, 42);
}
.yellow {
  color: yellow;
}
.darkTheme {
  background-color: black;
}
</style>