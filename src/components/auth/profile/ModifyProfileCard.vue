<template>
  <!--=== Modify Info Card========-->
  <div class="card shadow-sm border-0 rounded-0 mt-4 p-3 mb-3">
    <h5><i class="fa fa-edit" aria-hidden="true"></i> Modify Information</h5>
    <hr />
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="p-2">
          <div class="login-ip-info text-muted">
            Update/Edit Your Profile Details
          </div>
        </div>
        <div>
          <router-link
            to="/user/edit-profile"
            class="btn btn-sm px-3 py-2 font-weight-bold btn-update"
          >
            Modify <i class="fi fi-angle-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!--=== Modify Info Card========-->
</template>

<script>
export default {
  name: "modifyProfileCard",
  data() {
    return {};
  },
};
</script>

<style scoped>
.btn-update {
  background-color: #1781d3 !important;
  border: none !important;
}

.btn-update:hover {
  background-color: #1781d3 !important;
  border: none !important;
}
</style>
