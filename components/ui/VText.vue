<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    margin: {
      type: String,
      required: false,
      default: '',
      validator: (val) => {
        return ['', 'left', 'right'].includes(val)
      }
    },
    align: {
      type: String,
      required: false,
      default: 'left',
      validator: (val) => {
        return ['center', 'left', 'right'].includes(val)
      }
    }
  },
  computed: {
    classes () {
      const classes = [

      ]
      if (this.align) {
        classes.push(`text-${this.align}`)
      }
      return classes
    }
  }
}
</script>

<style>

</style>
