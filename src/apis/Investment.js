import Api from './Api'

export default {
  /* -------------------------------------------------------------------------- */
  /*                              Create Investment                             */
  /* -------------------------------------------------------------------------- */
  async createInvestment(data) {
    let token = localStorage.getItem('token')
    return Api.post('investment/create', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*                              Update Investment                             */
  /* -------------------------------------------------------------------------- */
  async updateInvestment(data) {
    let token = localStorage.getItem('token')
    return Api.put(`investment/update/${data.id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*            List Ongoing Investments for Dashboard By Page @Param: PageNum         */
  /* -------------------------------------------------------------------------- */
  async listDashboardInvestments(page) {
    let token = localStorage.getItem('token')
    return Api.get(`investment/ongoing?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*            Fetch Investments By Page @Param: PageNum         */
  /* -------------------------------------------------------------------------- */
  async fetchInvestments(page) {
    let token = localStorage.getItem('token')
    return Api.get(`investment/paginate?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*            Fetch Investments By Page ADMIN @Param: PageNum         */
  /* -------------------------------------------------------------------------- */
  async fetchAdminInvestments(page) {
    let token = localStorage.getItem('token')
    return Api.get(`investment/admin/paginate?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*            Fetch Transactions for Tracker         */
  /* -------------------------------------------------------------------------- */
  async allTransactions() {
    let token = localStorage.getItem('token')
    return Api.get(`transactions/all`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*                              Investment Chart                             */
  /* -------------------------------------------------------------------------- */
  async chartData() {
    let token = localStorage.getItem('token')
    return Api.get(`investment/chartdata`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*                              Transaction Chart                             */
  /* -------------------------------------------------------------------------- */
  async dashCardData() {
    let token = localStorage.getItem('token')
    return Api.get(`investment/dashCardData`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* -------------------------------------------------------------------------- */
  /*                    Show a Investment                                    */
  /* -------------------------------------------------------------------------- */
  async showInvestment(id, mode) {
    let token = localStorage.getItem('token')

    return Api.get(`investment/${id}?mode=${mode}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
