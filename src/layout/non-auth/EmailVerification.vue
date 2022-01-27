<template>
  <div>
    <div class="verify_nav">
      <router-link class="mr-auto navbar-brand" to="/">
        <img
          width="160"
          height="65"
          src="https://www.dipolediamond.com/wp-content/uploads/2019/04/ddlogo.png"
          alt="LOGO"
        />
      </router-link>
    </div>

    <slot name="body"></slot>
  </div>
</template>

<script>
export default {
  name: "EmailVerification",
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
.verify_nav {
  display: flex;
  flex-direction: row;
  padding: 26.5px 24px;
  -webkit-box-align: center;
  align-items: center;
}

@media (min-width: 576px) {
  .verify_nav {
    padding: 36px 44px;
  }
}
</style>
