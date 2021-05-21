<template>
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label class="required" for="lastname">Nom</label>
        <input id="lastname" type="text" class="form-control" placeholder="Doe">
      </div>
      <div class="form-group col-md-6">
        <label class="required" for="firstname">Prenom</label>
        <input id="lastname" type="text" class="form-control" placeholder="John">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="phone">Téléphone</label>
        <input id="phone" type="phone" class="form-control" placeholder="0123456789">
      </div>
      <div class="form-group col-md-6">
        <label for="enterprise">Société</label>
        <input id="enterprise" type="text" class="form-control" placeholder="Votre société">
      </div>
    </div>
    <div class="form-group">
      <label class="required" for="email">Adresse mail</label>
      <input id="email" type="mail" class="form-control" placeholder="john.doe@live.fr">
    </div>
    <div class="form-group">
      <label class="required" for="message">Votre message</label>
      <textarea id="message" class="form-control" rows="5" placeholder="Bonjour, J'aimerai avoir des infos sur..." />
    </div>
    <button type="submit" class="btn btn-primary">
      Envoyer
    </button>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.form-group {
  label.required:after {
    content: '*';
    color: $error;
  }
  .form-control {
    border: 1px solid $main-color;
  }
}

</style>
