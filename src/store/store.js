import Vue from 'vue'
import Vuex from 'vuex'
import {getAllPokemon, getPokemonDetails} from '../services/pokeApi'

Vue.use(Vuex)

// this is a nice trick that webpack helps you to build certain value's for a specific build
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    initLoad: false, // one for the full vokedex
    loadDetails: false, // only the left part when getting the details
    selectdPokemon: {},
    filteredPokemons: [],
    errorSate: {},
    pokemons: [],
  },
  mutations: {
    setAllPokemons(state, listPokemon) {
      state.pokemons = listPokemon;
    },
    setErrorState(state, error) {
      state.errorSate = error;
      throw error;
    },
    setInitLoad(state, loadBoolean) {
      state.initLoad = loadBoolean;
    },
    loadDetails(state, loadBoolean) {
      state.loadDetails = loadBoolean;
    },
    setSelectedPokemon(state, pokemon) {
      state.selectdPokemon = pokemon
    },
    setFilterdPokemon(state, pokemons) {
      state.filteredPokemons = pokemons
    },
  },
  getters: {
    getFilteredPokemon: state => {
      return state.filteredPokemons;
    },
    getFirstThreeFilteredPokemon: state => {
      console.log(state.filteredPokemons);
      return state.filteredPokemons.slice(0, 4);
    }
  },
  actions: {
    async getAllPokemon ({commit}) {
      commit('setInitLoad', true);
      let allPokemon =  await getAllPokemon();
      if(allPokemon.results){
        commit('setAllPokemons', allPokemon.results);
        commit('setInitLoad', false);
      } else {
        commit('setErrorState', new Error('Something went wrong with getting the list of pokemon'));
        commit('setInitLoad', false);
      }
    },
    async getPokemonDetails ({commit}, url) {
      commit('loadDetails', true);
      let pokemon =  await getPokemonDetails(url);
      if(pokemon.results){
        commit('setSelectedPokemon', pokemon.results);
        commit('loadDetails', false);
      } else {
        commit('setErrorState', new Error('Something went wrong with getting the pokemon details'));
        commit('loadDetails', false);
      }
    },
    filterPokemon({commit, state}, query) {
      commit('setFilterdPokemon', state.pokemons.filter(pokemon => pokemon.name.includes(query.toLowerCase())))
    },
  },
})
