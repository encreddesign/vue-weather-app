<template>
  <form class="c-form" action="" @submit.prevent="onSubmit">
    <input
      v-model="searchInput"
      class="c-form__field c-form__field--text"
      :placeholder="placeholder"
      type="search">
    <button
      class="c-form__submit-btn c-button"
      :disabled="searchInput.length === 0">
      Search
    </button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import Component from 'vue-class-component'
import { QueryParams } from '~/store/types/api'

@Component({
  props: {
    placeholder: String
  },
  computed: {
    ...mapState(['apiKey'])
  },
  methods: {
    ...mapActions(['fetchWeatherData'])
  }
})
export default class SearchForm extends Vue {
  placeholder: string

  apiKey: string | null

  searchInput: string = ''

  fetchWeatherData: (params: QueryParams) => void

  onSubmit(): void {
    const formatted = this.searchInput.toLowerCase().replace(/\s+/g, '')

    if (this.apiKey && formatted.length) {
      this.fetchWeatherData({
        q: formatted,
        appid: this.apiKey
      })
    }
  }
}
</script>
