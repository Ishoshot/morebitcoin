/* ----------------------------- Non-Auth Pages ----------------------------- */

import Home from './pages/non-auth/Index.vue'

/* ------------------------------ Custom Pages ------------------------------ */

import FourOFour from './pages/custom/404.vue'
import OTPVerification from './pages/custom/OTPVerification.vue'
import Maintenance from './pages/custom/Maintenance.vue'
import Maintenancee from './pages/custom/Maintenancee.vue'

/* ------------------------------- Auth Pages ------------------------------- */

import Register from './pages/auth/Register.vue'
import Login from './pages/auth/Login.vue'
import Dashboard from './pages/auth/Dashboard.vue'
import Profile from './pages/auth/Profile.vue'
import EditProfile from './pages/auth/EditProfile.vue'
import Invest from './pages/auth/Invest.vue'
import Withdrawals from './pages/auth/Withdrawals.vue'
import Withdrawal from './pages/auth/Withdrawal.vue'
import Investments from './pages/auth/Investments.vue'
import Investment from './pages/auth/Investment.vue'

/* ------------------------------- Admin Pages ------------------------------ */
import AdminInvestments from './pages/auth/Admin/Investments.vue'
import AdminInvestment from './pages/auth/Admin/Investment.vue'
import AdminWithdrawals from './pages/auth/Admin/Withdrawals.vue'
import AdminWithdrawal from './pages/auth/Admin/Withdrawal.vue'

function isOTPVerified() {
  return localStorage.getItem('otp_vrd')
}

export const routes = [
  /* ------------------------------- Home Route ------------------------------- */
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      guestOnly: true,
    },
  },

  /* ----------------------------- Authentication Routes ---------------------------- */
  {
    name: 'register',
    path: '/register',
    component: Register,
    meta: {
      guestOnly: true,
    },
  },

  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      guestOnly: true,
    },
  },

  {
    name: 'resendEmail',
    path: '/resend-verify',
    component: OTPVerification,
    meta: {
      authOnly: true,
    },
    beforeEnter: (to, from, next) => {
      if (isOTPVerified() != '0') {
        next({
          path: '/dashboard',
        })
      } else {
        next()
      }
    },
  },

  /* ----------------------------- Dashboard Route ---------------------------- */
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    meta: {
      authOnly: true,
      otpVerified: true,
    },
  },

  /* -------------------------- Admin Routes ------------------------- */

  {
    name: 'admin-investments',
    path: '/admin/investments',
    component: AdminInvestments,
    meta: {
      authOnly: true,
      adminsOnly: true,
    },
  },

  {
    name: 'admin-singleInvestment',
    path: '/admin/investment/:id',
    component: AdminInvestment,
    meta: {
      authOnly: true,
      adminsOnly: true,
    },
  },

  {
    name: 'admin-withdrawals',
    path: '/admin/withdrawals',
    component: AdminWithdrawals,
    meta: {
      authOnly: true,
      adminsOnly: true,
    },
  },

  {
    name: 'admin-singleWithdrawal',
    path: '/admin/withdrawal/:id',
    component: AdminWithdrawal,
    meta: {
      authOnly: true,
      adminsOnly: true,
    },
  },

  /* ------------------------------- User Routes ------------------------------ */
  {
    name: 'profile',
    path: '/user/profile',
    component: Profile,
    meta: {
      authOnly: true,
      otpVerified: true,
    },
  },

  {
    name: 'editProfile',
    path: '/user/edit-profile',
    component: EditProfile,
    meta: {
      authOnly: true,
      otpVerified: true,
    },
  },

  {
    name: 'withdrawals',
    path: '/withdrawals',
    component: Withdrawals,
    meta: {
      authOnly: true,
      otpVerified: true,
    },
  },

  {
    name: 'withdrawal',
    path: '/withdrawal/:id',
    component: Withdrawal,
    meta: {
      authOnly: true,
      otpVerified: true,
    },
  },

  {
    name: 'investments',
    path: '/investments',
    component: Investments,
    meta: {
      authOnly: true,
      otpVerified: true,
    },
  },

  {
    name: 'singleInvestment',
    path: '/investment/:id',
    component: Investment,
    meta: {
      authOnly: true,
      otpVerified: true,
    },
  },

  {
    name: 'Invest',
    path: '/invest/start',
    component: Invest,
    meta: {
      authOnly: true,
      otpVerified: true,
    },
  },

  /* -------------------------- Miscellaneous Routes -------------------------- */
  {
    name: '404',
    path: '*',
    component: FourOFour,
  },

  {
    name: 'Maintenance',
    path: '/security/site/maintenance',
    component: Maintenance,
    meta: {
      authOnly: true,
      otpVerified: true,
    },
  },

  {
    name: 'Maintenancee',
    path: '/security/main-site/maintenance',
    component: Maintenancee,
  },
]
