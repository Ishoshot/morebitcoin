const state = {
  sideNavVisibility: false,
}
const getters = {
  sideNavVisibility: (state) => {
    return state.sideNavVisibility
  },
}
const actions = {
  toggleSideNavVisibility: ({ commit }) => {
    commit('toggleSideNavVisibility')
  },
}
const mutations = {
  toggleSideNavVisibility: (state) => {
    const token = localStorage.getItem('token')
    if (token) {
      state.sideNavVisibility = !state.sideNavVisibility
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
