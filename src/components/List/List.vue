<template>
  <div class="list_animate_wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "list-wrap",
  data: ()=> ({
    showPane: false
  }),
  methods: {

  },
}
</script>

<style scoped>
.list_animate_wrap {
  position: relative;
}
</style>
