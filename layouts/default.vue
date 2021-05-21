<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Domine',Georgia,"Times New Roman",serif;
  background-color: $body-color;
  color: $black;
}

.no-padding > [class*='col-'] {
  padding-right:0;
  padding-left:0;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat',Helvetica,Arial,Lucida,sans-serif;
    font-weight: 700;
}

h1 {
  font-size: 42px;
  line-height: 1.3em;
}
h2 {
  font-size: 36px;
  line-height: 1.3em;
}
h4 {
  font-size: 16px;
  line-height: 1.9em;;
}

q {
  font-size: 20px;
  &::before {
    font-size: 32px;
    margin-right: 15px;
  }
  &::after {
    font-size: 32px;
    margin-left: 15px;
  }
}
p {
  line-height: 1.9em;
}
</style>
