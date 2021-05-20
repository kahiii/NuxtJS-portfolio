<template>
  <div class="container-fluid">
    <div class="row">
      <VSection
        name="presentation"
        type="section"
        background-image
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-7 col-xl-7">
              <VText
                class="section-desc mr-sm-5"
              >
                <h1>Développeur web Front-End</h1>
                <p>Moi c'est Kenan DUFRENE, j'ai 21 ans et je suis passionné par la programmation depuis mon enfance. Aujourd'hui, je me suis spécialisé dans le développement web Front-End et notament sur les frameworks VueJS et NuxtJS.</p>
                <BaseButton
                  component="Link"
                  url="/competences"
                  size="md"
                >
                  En savoir plus
                </BaseButton>
                <BaseButton
                  component="Download"
                  url="CV.pdf"
                  file-name="CV_Kenan_DUFRENE.pdf"
                  size="md"
                >
                  Télécharger mon CV
                </BaseButton>
              </VText>
            </div>
            <div class="col-sm-5">
              <img src="https://kp-dev.fr/wp-content/uploads/2019/09/coding-isometric-03.png" alt="" class="img img-fluid">
            </div>
          </div>
        </div>
      </VSection>
      <VSection
        name="about-me"
        type="section"
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-7 col-xl-4">
              <VText
                class="section-desc mr-sm-5"
              >
                <h2>Qui suis-je ?</h2>
                <h4>Passionné par la programmation.</h4>
                <p>Je m'exerce chaque jour pour en apprendre toujours plus sur les dernières technologies et leurs avancées.</p>
              </VText>
            </div>
            <div class="col-sm-8 pt-sm-5">
              <div class="row">
                <div class="col-sm-6">
                  <img src="https://kp-dev.fr/wp-content/uploads/2019/09/coding-isometric-03.png" alt="" class="img img-fluid">
                </div>
                <div class="col-sm-6">
                  <VText
                    class="section-desc ml-sm-5"
                  >
                    <h2>Mon objectif</h2>
                    <h4>Répondre à un besoin humain.</h4>
                    <p>J'aimerai mettre mes compétences au service de l'humain et ainsi rendre le monde meilleur au travers d'un site web.</p>
                  </VText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VSection>
      <VSection
        name="about-me"
        type="banner"
        background-image
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <VText
                class="banner-desc"
                align="center"
              >
                <q>Créer un site c'est bien, mais créer un site au service de l'humain c'est mieux.</q>
              </VText>
            </div>
          </div>
        </div>
      </VSection>
      <VSection
        name="presentation"
        type="section"
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-4 col-xl-5">
              <VText
                class="section-desc mr-sm-5"
              >
                <h2>Compétences</h2>
                <h4>Passionné par le développement web, je me suis spécialisé dans les langages Front-End.</h4>
                <p>Mes compétences sont en constante évolution, découvrez toutes mes technologies, frameworks, librairies et CMS favoris..</p>
                <BaseButton
                  component="Link"
                  url="/competences"
                  size="md"
                >
                  En savoir plus
                </BaseButton>
              </VText>
            </div>
            <div class="col-sm-12 col-lg-8 col-xl-7">
              <div class="row no-padding shadow-lg">
                <SkillCard
                  v-for="(skill, index) in skills"
                  :key="`skill-${index}`"
                  :skill="skill"
                  class="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                />
              </div>
            </div>
          </div>
        </div>
      </VSection>
      <VSection
        name="presentation"
        type="section"
        background-image
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <CarouselCard :interval="15000" height="400px" type="card" arrow="always">
                <CarouselCardItem v-for="(slide) in slides" :key="slide">
                  <img class="img" style="min-height:100%; width:100%" :src="require(`@/assets/uploads/projets/${slide}`)">
                </CarouselCardItem>
              </CarouselCard>
            </div>
            <div class="col-sm-12 col-lg-7 col-xl-6">
              <VText
                class="section-desc ml-sm-5"
              >
                <h2>Projets</h2>
                <h4>Découvrez l'ensemble des projets personnels et professionnels que j'ai réalisé.</h4>
                <p>Que ce soit un site e-commerce, un site vitrine ou encore un plugin Minecraft, je travaille toujours avec passion, sérieux et professionnalisme.</p>
                <BaseButton
                  component="Link"
                  url="/projets"
                  size="md"
                >
                  Voir les projets
                </BaseButton>
              </VText>
            </div>
          </div>
        </div>
      </VSection>
      <VSection
        name="contact"
        type="section"
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-7 col-xl-5">
              <VText
                class="section-desc mr-sm-5"
              >
                <h2>Contactez-moi</h2>
                <h4>Vous avez un projet ou des questions sur mon travail ?</h4>
                <p>Si ce que vous avez vu et lu vous intéresse n'hésitez pas à me contacter. Je suis toujours intéressé par les nouvelles opportunités.</p>
              </VText>
            </div>
            <div class="col-sm-6">
              <div class="card shadow-lg">
                <div class="card-body">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </VSection>
      <TheFooter />
    </div>
  </div>
</template>

<script>
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'
import GlobalSkills from '../datas/Skills'

export default {
  components: { CarouselCard, CarouselCardItem },
  data () {
    return {
      skills: GlobalSkills,
      slides: [
        'lacouleurdesmaux.png',
        'lordparadise.png',
        'portfolio.png'
      ]
    }
  },
  head () {
    return {
      title: 'Kenan DUFRENE - Developpeur web Front-End'
    }
  }
}
</script>

<style lang="scss">

</style>
