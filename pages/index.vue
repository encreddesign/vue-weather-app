<template>
  <section class="l-container">
    <p>Index page</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  middleware: 'authenticate'
})
export default class extends Vue {}
</script>
