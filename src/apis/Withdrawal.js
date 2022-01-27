import Api from './Api'

export default {
  /* -------------------------------------------------------------------------- */
  /*             Fetch All Withdrawals                                        */
  /* -------------------------------------------------------------------------- */
  async fetchWithdrawals(page) {
    let token = localStorage.getItem('token')
    return Api.get(`withdrawal/all?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*             Fetch User's Withdrawals                                        */
  /* -------------------------------------------------------------------------- */
  async fetchUserWithdrawals(page) {
    let token = localStorage.getItem('token')
    return Api.get(`withdrawal/user?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*             Create a New Withdrawal @param= formData                   */
  /* -------------------------------------------------------------------------- */
  async createWithdrawal(data) {
    let token = localStorage.getItem('token')
    return Api.post('withdrawal/create', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*                    Show a Beneficiary                                    */
  /* -------------------------------------------------------------------------- */
  async showWithdrawal(id, mode) {
    let token = localStorage.getItem('token')
    return Api.get(`withdrawal/${id}?mode=${mode}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*             Update Withdrawal  @param= formData                   */
  /* -------------------------------------------------------------------------- */
  async updateWithdrawal(data) {
    let token = localStorage.getItem('token')

    return Api.put(`withdrawal/update/${data.id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}
