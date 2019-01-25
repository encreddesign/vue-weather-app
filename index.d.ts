import Vue, { ComponentOptions } from 'vue';

declare module '*.vue' {
  import Vue from 'vue'
  const _default: Vue
  export default _default
}

declare module 'vue/types/options' {
  type Context = any

  interface ComponentOptions<V extends Vue> {
    fetch?: (ctx: Context) => Promise<void> | void
    middleware?: string | string[];
  }
}