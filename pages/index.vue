<template>
  <div class="l-page">
    <div class="l-container">
      <h1 class="c-title c-title--center">Take a look at the weather conditions</h1>

      <SearchForm placeholder="Enter location (London, UK e.g)"/>

      <template v-if="loading">
        <div class="c-blocks">
          <WeatherBlock :placeholder="true" />
        </div>
      </template>
      <template v-else>
        <div v-if="data" class="c-blocks">
          <WeatherBlock :data="data"/>
        </div>
        <h3 v-else-if="search" class="c-title c-title--error c-title--center">No weather results returned for "{{ search }}"</h3>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import Component from 'vue-class-component'
import { RootResponse, QueryParams } from '~/store/types/api'
import WeatherBlock from '~/components/WeatherBlock.vue'
import SearchForm from '~/components/SearchForm.vue'

@Component({
  middleware: 'authenticate',
  components: {
    WeatherBlock,
    SearchForm
  },
  computed: {
    ...mapState([
      'loading',
      'data',
      'error',
      'search'
    ])
  },
  methods: {
    ...mapActions(['fetchWeatherData'])
  }
})
export default class extends Vue {
  loading: boolean

  data: RootResponse

  error: boolean

  search: string | null

  fetchWeatherData: (params: QueryParams) => void
}
</script>
