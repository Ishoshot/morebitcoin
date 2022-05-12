<template>
  <div>
    <prenavbar></prenavbar>

    <navbar></navbar>

    <slot name="body"></slot>

    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  name: "NonAuth",
  data() {
    return {};
  },
  mounted() {},
};
</script>
