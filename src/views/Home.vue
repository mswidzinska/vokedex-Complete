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
         <input v-model="name">
         <input type="checkbox" v-model="checked">
        <button type="submit" @click.prevent="aClickHandler('Hi')"> <!-- prevent reloading the page -->
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
      <ul>
        <li v-for="dog in dogs" :key="dog.index">
          <p>Dog "{{ dog.name }}" is a {{ dog.type }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "Lili",
      red: true,
      green: false,
      yellow: false,
      items: ["item1", "item2", "item3", "item4", "item5", "item6"],
      checked: true,
      dogs: [
        { name: "How", type: "labrador" },
        { name: "Mimi", type: "chow-chow" },
        { name: "Luca", type: "german shephard" },
        { name: "Luca", type: "swiss shephard" },
      ],
    };
  },
  methods: {
    aClickHandler() {
      alert("I have been clicked " + this.name)
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
  color: red;
}
.green {
  color: green;
}
.yellow {
  color: yellow;
}
</style>