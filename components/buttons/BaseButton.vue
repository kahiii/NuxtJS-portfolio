<template>
  <component
    :is="`Button${component}`"
    :class="classes"
    v-bind="$props"
  >
    <slot />
  </component>
</template>

<script>
import sharedProps from './shared-props'

export default {
  props: {
    ...sharedProps.props,
    component: {
      type: String,
      required: false,
      default: 'Link'
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
      validator: (val) => {
        return ['primary', 'secondary', 'disabled'].includes(val)
      }
    },
    size: {
      type: String,
      required: false,
      default: 'lg',
      validator: (val) => {
        return ['sm', 'md', 'lg'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes () {
      const classes = [
        'btn',
        { disabled: this.disabled }
      ]
      if (this.size) {
        classes.push(`btn-${this.size}`)
      }
      if (this.color) {
        classes.push(`btn-${this.color}`)
      }
      return classes
    }
  }
}
</script>

<style>

</style>
