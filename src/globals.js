import Vue from 'vue'

// Auth Layout
import Auth from './layout/auth/Auth.vue'

// NonAuth Layout
import NonAuth from './layout/non-auth/NonAuth.vue'
import EmailVerification from './layout/non-auth/EmailVerification.vue'

// Auth Components
import AuthSideBar from './components/auth/nav/SideNav.vue'
import AuthTopBar from './components/auth/nav/TopNav.vue'
import AuthFooter from './components/auth/footer/Footer.vue'
import PersonalDetails from './components/auth/profile/PersonalDetails.vue'
import ModifyProfile from './components/auth/profile/ModifyProfileCard.vue'
import Card from './components/auth/dashboard/card.vue'
import DetailsCard from './components/auth/dashboard/detailsCard.vue'
import Chart from './components/auth/dashboard/chart.vue'
import PieChart from './components/auth/dashboard/pieChart.vue'
import profileProgress from './components/auth/dashboard/profileProgress.vue'
import OngoingInvestments from './components/auth/dashboard/ongoingInvestments.vue'
import CreateWithdrawal from './components/auth/withdrawal/CreateWithdrawal.vue'
import ManageWithdrawals from './components/auth/withdrawal/ManageWithdrawals.vue'
import OnboardUserOnMifos from './components/auth/dashboard/OnboardUserOnMifos.vue'

// Non-Auth Components
import PreNavBar from './components/non-auth/nav/PreNavBar.vue'
import NavBar from './components/non-auth/nav/NavBar.vue'
import Footer from './components/non-auth/footer/Footer.vue'
import Hero from './components/non-auth/Hero.vue'
import Advantage from './components/non-auth/Advantage.vue'
import Overview from './components/non-auth/Overview.vue'
import Features from './components/non-auth/Features.vue'
import Testimonial from './components/non-auth/Testimonial.vue'
import GetAppInStore from './components/non-auth/GetAppInStore.vue'
import Plans from './components/non-auth/Plans.vue'

//Component Registration - AUTH
Vue.component('auth', Auth)
Vue.component('auth-topbar', AuthTopBar)
Vue.component('auth-sidebar', AuthSideBar)
Vue.component('auth-footer', AuthFooter)
Vue.component('personal-details', PersonalDetails)
Vue.component('modify-profile-card', ModifyProfile)
Vue.component('credit-card', Card)
Vue.component('details-card', DetailsCard)
Vue.component('chart', Chart)
Vue.component('pie-chart', PieChart)
Vue.component('profile-Progress', profileProgress)
Vue.component('dash-ongoing-investments', OngoingInvestments)
Vue.component('create-withdrawal', CreateWithdrawal)
Vue.component('manage-withdrawals', ManageWithdrawals)
Vue.component('onboard-user-on-mifos', OnboardUserOnMifos)

//Component Registration - NON-AUTH
Vue.component('non-auth', NonAuth)
Vue.component('prenavbar', PreNavBar)
Vue.component('navbar', NavBar)
Vue.component('footer-component', Footer)
Vue.component('hero', Hero)
Vue.component('advantage', Advantage)
Vue.component('overview', Overview)
Vue.component('features', Features)
Vue.component('testimonial', Testimonial)
Vue.component('get-app-in-store', GetAppInStore)
Vue.component('plans', Plans)
Vue.component('email-verification', EmailVerification)
