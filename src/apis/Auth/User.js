import Api from '../Api'

export default {
  /* -------------------------------------------------------------------------- */
  /*                         Register @param - form data                        */
  /* -------------------------------------------------------------------------- */
  async register(form) {
    return Api.post('/register', form)
  },

  /* -------------------------------------------------------------------------- */
  /*                          Login @param - form data                          */
  /* -------------------------------------------------------------------------- */
  async login(form) {
    return Api.post('/login', form)
  },

  /* ------------------------------- Fetch User  ----------------------------------- */
  async fetchUser() {
    let token = localStorage.getItem('token')

    return Api.get(`/get-user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* ------------------------------- Finish OTPVerification  ----------------------------------- */
  async OTPVerification(data) {
    let token = localStorage.getItem('token')
    return Api.post(`/user/verify-otp`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* ------------------------------- Update User @Param FormData ----------------------------- */
  async updateUser(data) {
    let token = localStorage.getItem('token')

    return Api.put(`/user/update`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* ------------------------------- LogOut ---------------------------------------------- */
  async logOut() {
    let token = localStorage.getItem('token')

    return Api.post(`/logout`, null, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}
