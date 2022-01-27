import Withdrawal from '../../apis/Withdrawal'

const state = {
  withdrawals: [],
  withdrawal: {},
  userWithdrawals: {},
  withBackEndError: '',
  withBackEndSuccess: '',
  withBackEndObjError: {},
}

const getters = {
  allWithdrawals: (state) => {
    return state.withdrawals
  },

  singleWithdrawal: (state) => {
    return state.withdrawal
  },

  userWithdrawals: (state) => {
    return state.userWithdrawals
  },

  withBackEndError: (state) => {
    return state.withBackEndError
  },

  withBackEndSuccess: (state) => {
    return state.withBackEndSuccess
  },

  withBackEndObjError: (state) => {
    return state.withBackEndObjError
  },
}

const actions = {
  fetchWithdrawals: async ({ commit }, PageNum) => {
    await Withdrawal.fetchWithdrawals(PageNum)
      .then((res) => {
        commit('setWithdrawals', res.data.withdrawals)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  fetchUserWithdrawals: async ({ commit }, PageNum) => {
    await Withdrawal.fetchUserWithdrawals(PageNum)
      .then((res) => {
        commit('setUserWithdrawals', res.data.withdrawals)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* -------------------------------------------------------------------------- */
  /*                                 Create Withdrawal                         */
  /* -------------------------------------------------------------------------- */
  createWithdrawal: async ({ commit }, data) => {
    await Withdrawal.createWithdrawal(data)
      .then((res) => {
        commit('setUserWithdrawals', res.data.withdrawals)
        commit('setWithBackEndSuccess', res.data.message)
      })
      .catch((err) => {
        if (err.response.status == 422) {
          commit('setWithBackEndObjError', err.response.data.error)
        } else if (err.response.status == 401) {
          commit('setWithBackEndError', err.response.data.error)
        } else {
          commit(
            'setWithBackEndError',
            'Oops! An Error Encountered while performing action. Please try Again!',
          )
        }
      })
  },

  /* -------------------------------------------------------------------------- */
  /*                     Get a Single Withdrawal                             */
  /* -------------------------------------------------------------------------- */
  showWithdrawal: async ({ commit }, data) => {
    await Withdrawal.showWithdrawal(data.id, data.mode)
      .then((res) => {
        commit('setWithdrawal', res.data.withdrawal)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* -------------------------------------------------------------------------- */
  /*                                 Update Withdrawal                         */
  /* -------------------------------------------------------------------------- */
  updateWithdrawal: async ({ commit }, data) => {
    await Withdrawal.updateWithdrawal(data)
      .then((res) => {
        commit('setWithBackEndSuccess', res.data.message)
      })
      .catch((err) => {
        if (err.response.status == 422) {
          commit('setWithBackEndObjError', err.response.data.error)
        } else if (err.response.status == 401) {
          commit('setWithBackEndError', err.response.data.error)
        } else {
          commit(
            'setWithBackEndError',
            'Oops! An Error Encountered while performing action. Please try Again!',
          )
        }
      })
  },
}

const mutations = {
  setWithdrawals: (state, withdrawals) => {
    state.withdrawals = withdrawals
  },

  setUserWithdrawals: (state, userWithdrawals) => {
    state.userWithdrawals = userWithdrawals
  },

  setWithdrawal: (state, withdrawal) => {
    state.withdrawal = withdrawal
  },

  setWithBackEndError: (state, error) => {
    state.withBackEndError = error
  },

  setWithBackEndSuccess: (state, message) => {
    state.withBackEndSuccess = message
  },

  setWithBackEndObjError: (state, message) => {
    state.withBackEndObjError = message
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
