<template>
  <section :id="name" :class="classes">
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'section-name'
    },
    type: {
      type: String,
      required: true,
      default: 'section',
      validator: (val) => {
        return ['section', 'banner'].includes(val)
      }
    },
    backgroundImage: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes () {
      const classes = [
        'container-fluid',
        `padding-${this.type}`,
        { background: this.backgroundImage }
      ]
      return classes
    }
  }
}
</script>

<style lang="scss">
.padding {
  &-section {
    padding: 100px 0;
  }
  &-banner {
    padding: 50px 0;
  }
}

.section-desc {
  padding: 30px 0;
  h1, h2 {
    text-transform: uppercase;
    color: $main-color;
    margin-bottom: 30px;
  }
  p {
    color: $second-color;
  }
}

.background {
  background-blend-mode: overlay;
  background-image: url('https://www.kp-dev.fr/wp-content/uploads/2019/09/coding-background-texture.jpg'), linear-gradient(180deg, #474ab6 0%, #9271f6 100%);
  background-repeat: no-repeat;
  background-size: cover;
  .section-desc, .banner-desc {
    h1, h2, q {
      color: $white;
    }
    p {
      color: $third-color;
    }
  }
}
</style>
