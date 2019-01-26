<template>
  <div class="c-blocks__block">
    <div v-if="getIcon" class="c-blocks__block__image">{{ getIcon }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import icons from '~/assets/svg/svg.icons.js'
import { RootResponse } from '~/store/types/api'

@Component({
  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  }
})
export default class WeatherBlock extends Vue {
  type: string

  data: RootResponse

  get getIcon(): string | null {
    return icons[this.type] ? icons[this.type] : null
  }
}
</script>
