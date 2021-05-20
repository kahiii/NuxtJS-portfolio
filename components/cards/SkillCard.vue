<template>
  <div>
    <div class="card rounded-0">
      <div class="card-body">
        <div class="body-img">
          <img class="" :src="skill.img">
        </div>
        <div class="body-container">
          <h4>{{ skill.name }}</h4>
          <p>{{ skill.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      default: () => ({
        img: 'https://www.kp-dev.fr/wp-content/uploads/2019/09/coding-icon_8.jpg',
        name: 'Web Developpement',
        desc: 'Courte description de la compétence.'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  &:hover {
    text-decoration: none;
  }
}

.body {
  &-img{
    display: table-cell;
    vertical-align: top;
    img {
      height: 64px;
      width: 64px;
    }
  }
  &-container {
    display: table-cell;
    vertical-align: top;
    padding-left: 15px;
    p {
      font-size: 14px;
      color: $second-color;
      margin: 0;
    }
  }
}
</style>
