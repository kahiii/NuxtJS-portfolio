<template>
  <a :href="url" :download="fileName" role="button">
    <slot />
  </a>
</template>

<script>
import sharedProps from './shared-props'

export default {
  props: {
    ...sharedProps.props
  }
}
</script>

<style>

</style>
