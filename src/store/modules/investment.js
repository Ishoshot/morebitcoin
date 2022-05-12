import Investment from '../../apis/Investment'

const state = {
  paginatedInvestments: {},
  paginatedOngoingDashboardInvestments: [],
  allInvestments: [],
  paginatedAdminInvestments: [],
  chartData: {},
  dashCardData: [],
  investmentBackEndError: '',
  investmentBackEndSuccess: '',
  investmentBackEndObjError: {},
  initiatedInvestment: {},
  investment: [],
}

const getters = {
  paginatedInvestments: (state) => {
    return state.paginatedInvestments
  },

  allInvestments: (state) => {
    return state.allInvestments
  },

  singleInvestment: (state) => {
    return state.investment
  },

  paginatedOngoingDashboardInvestments: (state) => {
    return state.paginatedOngoingDashboardInvestments
  },

  paginatedAdminInvestments: (state) => {
    return state.paginatedAdminInvestments
  },

  initiatedInvestment: (state) => {
    return state.initiatedInvestment
  },

  investmentBackEndError: (state) => {
    return state.investmentBackEndError
  },

  investmentBackEndSuccess: (state) => {
    return state.investmentBackEndSuccess
  },
  investmentBackEndObjError: (state) => {
    return state.investmentBackEndObjError
  },
  chartData: (state) => {
    return state.chartData
  },
  dashCardData: (state) => {
    return state.dashCardData
  },
}

const actions = {
  /* ------------------------------ Create Investment ------------------------------ */
  createInvestment: async ({ commit }, data) => {
    await Investment.createInvestment(data)
      .then((res) => {
        commit('setInitiatedInvestment', res.data.investment)
      })
      .catch((err) => {
        if (err.response.status == 422) {
          commit('setInvestmentBackEndObjError', err.response.data.error)
        } else {
          commit(
            'setInvestmentBackendErr',
            'Oops! An Error Encountered while initiating investment. Please try Again!',
          )
        }
      })
  },

  /* ------------------------------ Update Investment ------------------------------ */
  updateInvestment: async ({ commit }, data) => {
    await Investment.updateInvestment(data)
      .then((res) => {
        commit('setInvestmentBackEndSuccess', res.data.message)
      })
      .catch((err) => {
        if (err.response.status == 422) {
          commit('setInvestmentBackEndObjError', err.response.data.error)
        } else {
          commit(
            'setInvestmentBackendErr',
            'Oops! An Error Encountered while initiating investment. Please try Again!',
          )
        }
      })
  },

  /* -------------------------------------------------------------------------- */
  /*                     Get a SIngle Investment                             */
  /* -------------------------------------------------------------------------- */
  showInvestment: async ({ commit }, data) => {
    await Investment.showInvestment(data.id, data.mode)
      .then((res) => {
        commit('setInvestment', res.data.investment)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* ------------------------ List Investments By Page ------------------------ */
  listDashboardInvestments: async ({ commit }, PageNum) => {
    await Investment.listDashboardInvestments(PageNum)
      .then((res) => {
        commit('setpaginatedOngoingDashboardInvestments', res.data.investments)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* ------------------------ Fetch Investments By Page ------------------------ */
  fetchInvestments: async ({ commit }, PageNum) => {
    await Investment.fetchInvestments(PageNum)
      .then((res) => {
        commit('setPaginatedInvestments', res.data.investments)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* ------------------------ Fetch Investments By Page for Admin ------------------------ */
  fetchAdminInvestments: async ({ commit }, PageNum) => {
    await Investment.fetchAdminInvestments(PageNum)
      .then((res) => {
        commit('setPaginatedAdminInvestments', res.data.investments)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* ------------------------ Fetch Investments for Tracker ------------------------ */
  fetchAllInvestments: async ({ commit }) => {
    await Investment.allInvestments()
      .then((res) => {
        commit('setAllInvestments', res.data.investments)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* ----------------------------- Get Chart Data ----------------------------- */
  getChartData: async ({ commit }) => {
    await Investment.chartData()
      .then((res) => {
        commit('setChartData', res.data.chartData)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* ----------------------------- Get Dash Card Data ----------------------------- */
  getDashCardData: async ({ commit }) => {
    await Investment.dashCardData()
      .then((res) => {
        commit('setDashCardData', res.data.dashCardData)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

const mutations = {
  setPaginatedInvestments: (state, paginatedInvestments) => {
    state.paginatedInvestments = paginatedInvestments
  },

  setAllInvestments: (state, allInvestments) => {
    state.allInvestments = allInvestments
  },

  setInvestment: (state, investment) => {
    state.investment = investment
  },

  setpaginatedOngoingDashboardInvestments: (
    state,
    paginatedOngoingDashboardInvestments,
  ) => {
    state.paginatedOngoingDashboardInvestments = paginatedOngoingDashboardInvestments
  },

  setPaginatedAdminInvestments: (state, data) => {
    state.paginatedAdminInvestments = data
  },

  setInitiatedInvestment: (state, initiatedInvestment) => {
    state.initiatedInvestment = initiatedInvestment
  },

  setInvestmentBackendErr: (state, investmentBackEndError) => {
    state.investmentBackEndError = investmentBackEndError
  },

  setInvestmentBackEndSuccess: (state, investmentBackEndSuccess) => {
    state.investmentBackEndSuccess = investmentBackEndSuccess
  },

  setInvestmentBackEndObjError: (state, investmentBackEndObjError) => {
    state.investmentBackEndObjError = investmentBackEndObjError
  },

  setChartData: (state, chartData) => {
    state.chartData = chartData
  },

  setDashCardData: (state, dashCardData) => {
    state.dashCardData = dashCardData
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
