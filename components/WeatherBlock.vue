<template>
  <div v-if="!placeholder && data" class="c-blocks__block">
    <div v-if="getIcon" class="c-blocks__block__image c-blocks__block__image--fill" v-html="getIcon"/>
    <div class="c-blocks__block__content">
      <h2 class="c-title">{{ data.name }}</h2>
      <p>{{ data.weather[0].description }}</p>
      <p>Temprature (Kelvin) - {{ data.main.temp }}</p>
      <p>Humidity - {{ data.main.humidity }}</p>
      <p v-if="data.wind">Wind Speed - {{ data.wind.speed }}</p>
    </div>
  </div>
  <div v-else class="c-blocks__block">
    <div class="c-blocks__block__image">
      <div class="c-placeholder c-placeholder--image" />
    </div>
    <div class="c-blocks__block__content">
      <div class="c-placeholder c-placeholder--title" />
      <div
        v-for="index in 4"
        :key="index"
        class="c-placeholder c-placeholder--text" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import icons from '~/assets/svg/svg.icons.js'
import { RootResponse } from '~/store/types/api'

@Component({
  props: {
    placeholder: Boolean,
    data: Object
  }
})
export default class WeatherBlock extends Vue {
  placeholder: boolean

  data: RootResponse

  get getIcon(): string | null {
    const weatherIconType = this.data.weather[0].main.toLowerCase()

    return icons[weatherIconType] ? icons[weatherIconType] : icons.clouds
  }
}
</script>
