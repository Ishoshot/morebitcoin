<template>
  <!--=== Personal Info Card========-->
  <div class="card shadow-sm border-0 rounded-0 m-0 p-4">
    <h5>
      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
      Personal details
    </h5>
    <hr />
    <div class="container p-3">
      <div class="row">
        <div class="col-sm-6 mb-4 mb-sm-0">
          <label>First Name</label>
          <div class="info">
            {{
              userDetails.profile.first_name == null ||
              userDetails.profile.first_name == ""
                ? "N/A"
                : userDetails.profile.first_name
            }}
          </div>
        </div>

        <div class="col-sm-6">
          <label>Last Name</label>
          <div class="info">
            {{
              userDetails.profile.last_name == null ||
              userDetails.profile.last_name == ""
                ? "N/A"
                : userDetails.profile.last_name
            }}
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-sm-6 mb-4 mb-sm-0">
          <label>Phone Number</label>
          <div class="info">
            {{
              userDetails.profile.phone == null ||
              userDetails.profile.phone == ""
                ? "N/A"
                : userDetails.profile.phone
            }}
          </div>
        </div>

        <div class="col-sm-6">
          <label>Email Address</label>
          <div class="info">
            {{
              userDetails.email == null || userDetails.email == ""
                ? "N/A"
                : userDetails.email
            }}
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-sm-6 mb-4 mb-sm-0">
          <label>Address</label>
          <div class="info">
            {{
              userDetails.profile.address == null ||
              userDetails.profile.address == ""
                ? "N/A"
                : userDetails.profile.address
            }}
          </div>
        </div>

        <div class="col-sm-6">
          <label>City</label>

          <div class="info">
            {{
              userDetails.profile.city == null || userDetails.profile.city == ""
                ? "N/A"
                : userDetails.profile.city
            }}
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-sm-4 mb-4 mb-sm-0">
          <label>Country</label>
          <div class="info">
            {{
              userDetails.profile.country == null ||
              userDetails.profile.country == ""
                ? "N/A"
                : userDetails.profile.country
            }}
          </div>
        </div>

        <div class="col-sm-4">
          <label>State</label>
          <div class="info">
            {{
              userDetails.profile.state == null ||
              userDetails.profile.state == ""
                ? "N/A"
                : userDetails.profile.state
            }}
          </div>
        </div>

        <div class="col-sm-4">
          <label>Zip Code</label>

          <div class="info">
            {{
              userDetails.profile.zip == null || userDetails.profile.zip == ""
                ? "N/A"
                : userDetails.profile.zip
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--=== Personal Info Card========-->
</template>

<script>
export default {
  name: "personalDetails",
  props: {
    userDetails: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.info {
  pointer-events: none;
  border: none;
  background-color: whitesmoke;
  width: 100%;
  padding: 15px;
  font-size: 16px;
}
</style>
