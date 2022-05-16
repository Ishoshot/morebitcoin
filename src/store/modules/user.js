import User from '../../apis/Auth/User'

const state = {
  register: {
    backEndErrors: [],
    userFirstName: '',
    unHandledBackError: '',
  },

  login: {
    backEndError: '',
  },

  update: {
    backEndError: [],
    unHandledBackEndError: '',
  },

  emailVerification: {},

  user: {},

  token: '',

  otpMessage: ""
}

const getters = {
  /* -------------------------------- Register -------------------------------- */

  backEndErrors: (state) => {
    return state.register.backEndErrors
  },

  userFirstName: (state) => {
    return state.register.userFirstName
  },

  unHandledBackError: (state) => {
    return state.register.unHandledBackError
  },

  /* ---------------------------------- Login --------------------------------- */
  loginBackEndError: (state) => {
    return state.login.backEndError
  },

  /* ----------------------------- Update Profile ----------------------------- */
  updateUserBackEndError: (state) => {
    return state.update.backEndError
  },

  updateUserUnhandledError: (state) => {
    return state.update.unhandledError
  },

  /* ---------------------------------- User ---------------------------------- */
  userDetails: (state) => {
    return state.user
  },

  userToken: (state) => {
    return state.token
  },

  userRole: () => {
    return state.user.role.key
  },

  verificationResult: () => {
    return state.emailVerification
  },

  getOTPMessage: () => {
    return state.otpMessage;
  }
}

const actions = {
  /* -------------------------------------------------------------------------- */
  /*                             Register Functions                             */
  /* -------------------------------------------------------------------------- */

  createUser: async ({ commit }, data) => {
    await User.register(data)
      .then((res) => {
        console.log(res.data.user)
        commit('setUserFirstName', res.data.user.email)
      })
      .catch((err) => {
        if (err.response.status == 422) {
          commit('setBackEndErr', err.response.data.error)
        } else if (
          err.response.status == 500 &&
          err.response.data.message.includes('Duplicate entry')
        ) {
          const errMessage =
            'You are already registered, please sign in to continue.'
          commit('setUnHandledBackendErr', errMessage)
        } else {
          const errMessage = 'Oops! An error occured, please try again!'
          commit('setUnHandledBackendErr', errMessage)
        }
      })
  },

  clearAfterRegister: ({ commit }) => {
    commit('clearAfterReg')
  },

  /* -------------------------------------------------------------------------- */
  /*                              Login Functions                               */
  /* -------------------------------------------------------------------------- */
  login: async ({ commit }, data) => {
    await User.login(data)
      .then((res) => {
        var userObj = {
          user: res.data.user,
          token: res.data.token,
        }
        commit('setLoggedInUser', userObj)
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status == 422) {
          const errMessage = 'Invalid username or password'
          commit('setLoginBackEndErr', errMessage)
        } else {
          const errMessage = 'Oops! An error occured, please try again!'
          commit('setLoginBackEndErr', errMessage)
        }
      })
  },

  clearAfterLogin: ({ commit }) => {
    commit('clearAfterLogin')
  },

  /* -------------------------------------------------------------------------- */
  /*             Fetch User - Update User State                                 */
  /* -------------------------------------------------------------------------- */
  fetchUser: async ({ commit }) => {
    await User.fetchUser()
      .then((res) => {
        const user = res.data.user
        commit('setNewUserInfo', user)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* -------------------------------------------------------------------------- */
  /*             Logout                                                        */
  /* -------------------------------------------------------------------------- */
  logout: async ({ commit }) => {
    await User.logOut()
      .then(() => {
        const user = {}
        commit('setNewUserInfo', user)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* -------------------------------------------------------------------------- */
  /*                   Update User - Saves Modified User Data                   */
  /* -------------------------------------------------------------------------- */
  updateUser: async ({ commit }, data) => {
    commit
    await User.updateUser(data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response.data.error)

        if (err.response.status == 422) {
          commit('setUpdateUserBackEndError', err.response.data.error)
        } else {
          const errMessage = 'Oops! An error occured, please try again!'
          commit('setUnHandledUpdateBackendErr', errMessage)
        }

        console.log(err)
      })
  },

  /* --------------------------- OTP Verification  -------------------------- */

  OTPVerification: async ({ commit }, data) => {
    await User.OTPVerification(data)
      .then((res) => {
        let msgObj = res.data
        commit('setVerificationObject', msgObj)
      })
      .catch((err) => {
        if (err.response.status == 400 || err.response.status == 401) {
          let msgObj = err.response.data
          commit('setVerificationObject', msgObj)
        }
      })
  },


  //Send OTP for password reset
  callOTP: async ({ commit }, data) => {
    await User.callOTP(data)
      .then((res) => {
        commit('setOTPMessage', res.data.message)
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status == 404) {
          const errMessage = 'User with this email not found'
          commit('setLoginBackEndErr', errMessage)
        } else {
          const errMessage = 'Oops! An error occured, please try again!'
          commit('setLoginBackEndErr', errMessage)
        }
      })
  },

  //Reset Password
  resetPass: async ({ commit }, data) => {
    await User.forgetPassword(data)
      .then((res) => {
        commit('setOTPMessage', res.data.message)
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status == 404) {
          const errMessage = 'User with this email not found'
          commit('setLoginBackEndErr', errMessage)
        }
        else if (err.response.status == 401) {
          const errMessage = 'OTP is not valid'
          commit('setLoginBackEndErr', errMessage)
        } else {
          const errMessage = 'Oops! An error occured, please try again!'
          commit('setLoginBackEndErr', errMessage)
        }
      })
  },

  clearAfterVerify: ({ commit }) => {
    commit('clearAfterVerify')
  },

  /* -------------------------------------------------------------------------- */
  /*                          Clears State After Update                         */
  /* -------------------------------------------------------------------------- */
  clearAfterUpdate: ({ commit }) => {
    commit('clearAfterUpdate')
  },
}

const mutations = {
  /* ------------------------- Registeration mutations ------------------------ */

  setUserFirstName: (state, firstName) => {
    state.register.userFirstName = firstName
  },

  setBackEndErr: (state, backEndErrors) => {
    state.register.backEndErrors = backEndErrors
  },

  setUnHandledBackendErr: (state, errorMessage) => {
    state.register.unHandledBackError = errorMessage
  },

  clearAfterReg: (state) => {
    state.register.backEndErrors = []
    state.register.unHandledBackError = ''
  },

  /* ----------------------------- Login Mutations ---------------------------- */
  setLoginBackEndErr: (state, error) => {
    state.login.backEndError = error
  },

  clearAfterLogin: (state) => {
    state.login.backEndError = ''
  },

  /* -------------------------- Update User Mutations ------------------------- */
  setUpdateUserBackEndError: (state, error) => {
    state.update.backEndError = error
  },

  setUnHandledUpdateBackendErr: (state, error) => {
    state.update.unHandledBackEndError = error
  },

  clearAfterUpdate: (state) => {
    state.update.backEndError = []
    state.update.unHandledBackEndError = ''
  },

  /* ---------------------------------- User Mutation ---------------------------------- */
  setLoggedInUser: (state, userObj) => {
    state.user = userObj.user
    state.token = userObj.token
  },

  setNewUserInfo: (state, user) => {
    state.user = user
  },

  setVerificationObject: (state, msgObj) => {
    state.emailVerification = msgObj
  },

  clearAfterVerify: (state) => {
    state.emailVerification = {}
  },

  setOTPMessage: (state, msg) => {
    state.otpMessage = msg
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
