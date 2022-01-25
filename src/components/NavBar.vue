<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-primary"
    :class="{ active: title.length > 0 }"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ $store.state.title }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/Home" class="mx-4">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/About">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: this.$store.getters.getTitle,
    };
  },
};
</script>

<style>
.active {
  font-size: 40px;
}
</style>
