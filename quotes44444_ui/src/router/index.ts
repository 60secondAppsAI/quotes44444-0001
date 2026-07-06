import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '../stores/auth';
import SignIn from '../components/SignIn.vue';
import Settings from '../components/Settings.vue';
import MyDashboard from '../components/MyDashboard.vue';

// Dynamic imports for module components
import Offers from '../components/Offers.vue';
import OfferDetail from '../components/OfferDetail.vue';
import Wishlists from '../components/Wishlists.vue';
import WishlistDetail from '../components/WishlistDetail.vue';
import Disputes from '../components/Disputes.vue';
import DisputeDetail from '../components/DisputeDetail.vue';
import Notifications from '../components/Notifications.vue';
import NotificationDetail from '../components/NotificationDetail.vue';
import Transactions from '../components/Transactions.vue';
import TransactionDetail from '../components/TransactionDetail.vue';
import Messages from '../components/Messages.vue';
import MessageDetail from '../components/MessageDetail.vue';
import Auctions from '../components/Auctions.vue';
import AuctionDetail from '../components/AuctionDetail.vue';
import Feedbacks from '../components/Feedbacks.vue';
import FeedbackDetail from '../components/FeedbackDetail.vue';
import Items from '../components/Items.vue';
import ItemDetail from '../components/ItemDetail.vue';
import Invoices from '../components/Invoices.vue';
import InvoiceDetail from '../components/InvoiceDetail.vue';
import Subscriptions from '../components/Subscriptions.vue';
import SubscriptionDetail from '../components/SubscriptionDetail.vue';
import ReturnRequests from '../components/ReturnRequests.vue';
import ReturnRequestDetail from '../components/ReturnRequestDetail.vue';
import Addresss from '../components/Addresss.vue';
import AddressDetail from '../components/AddressDetail.vue';
import Watchlists from '../components/Watchlists.vue';
import WatchlistDetail from '../components/WatchlistDetail.vue';
import Categorys from '../components/Categorys.vue';
import CategoryDetail from '../components/CategoryDetail.vue';
import Payments from '../components/Payments.vue';
import PaymentDetail from '../components/PaymentDetail.vue';
import Bids from '../components/Bids.vue';
import BidDetail from '../components/BidDetail.vue';
import Users from '../components/Users.vue';
import UserDetail from '../components/UserDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: MyDashboard
  },
  
  // Dynamic module routes
  {
    path: '/offers',
    name: 'Offers',
    component: Offers
  },
  {
    path: '/offer/:id',
    name: 'OfferDetail',
    component: OfferDetail,
    props: true
  },
  {
    path: '/wishlists',
    name: 'Wishlists',
    component: Wishlists
  },
  {
    path: '/wishlist/:id',
    name: 'WishlistDetail',
    component: WishlistDetail,
    props: true
  },
  {
    path: '/disputes',
    name: 'Disputes',
    component: Disputes
  },
  {
    path: '/dispute/:id',
    name: 'DisputeDetail',
    component: DisputeDetail,
    props: true
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/notification/:id',
    name: 'NotificationDetail',
    component: NotificationDetail,
    props: true
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/transaction/:id',
    name: 'TransactionDetail',
    component: TransactionDetail,
    props: true
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/message/:id',
    name: 'MessageDetail',
    component: MessageDetail,
    props: true
  },
  {
    path: '/auctions',
    name: 'Auctions',
    component: Auctions
  },
  {
    path: '/auction/:id',
    name: 'AuctionDetail',
    component: AuctionDetail,
    props: true
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks
  },
  {
    path: '/feedback/:id',
    name: 'FeedbackDetail',
    component: FeedbackDetail,
    props: true
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  },
  {
    path: '/item/:id',
    name: 'ItemDetail',
    component: ItemDetail,
    props: true
  },
  {
    path: '/invoices',
    name: 'Invoices',
    component: Invoices
  },
  {
    path: '/invoice/:id',
    name: 'InvoiceDetail',
    component: InvoiceDetail,
    props: true
  },
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: Subscriptions
  },
  {
    path: '/subscription/:id',
    name: 'SubscriptionDetail',
    component: SubscriptionDetail,
    props: true
  },
  {
    path: '/returnRequests',
    name: 'ReturnRequests',
    component: ReturnRequests
  },
  {
    path: '/returnRequest/:id',
    name: 'ReturnRequestDetail',
    component: ReturnRequestDetail,
    props: true
  },
  {
    path: '/addresss',
    name: 'Addresss',
    component: Addresss
  },
  {
    path: '/address/:id',
    name: 'AddressDetail',
    component: AddressDetail,
    props: true
  },
  {
    path: '/watchlists',
    name: 'Watchlists',
    component: Watchlists
  },
  {
    path: '/watchlist/:id',
    name: 'WatchlistDetail',
    component: WatchlistDetail,
    props: true
  },
  {
    path: '/categorys',
    name: 'Categorys',
    component: Categorys
  },
  {
    path: '/category/:id',
    name: 'CategoryDetail',
    component: CategoryDetail,
    props: true
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments
  },
  {
    path: '/payment/:id',
    name: 'PaymentDetail',
    component: PaymentDetail,
    props: true
  },
  {
    path: '/bids',
    name: 'Bids',
    component: Bids
  },
  {
    path: '/bid/:id',
    name: 'BidDetail',
    component: BidDetail,
    props: true
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: UserDetail,
    props: true
  },

  // Core application routes
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
//  {
//    path: '/users',
//    name: 'Users',
//    component: Users,
//    meta: { requiresAuth: true }
//  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/dashboard'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }
});

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  const auth = useAuth();
  
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next({ name: 'SignIn', query: { redirect: to.fullPath } });
  } else if (to.name === 'SignIn' && auth.isAuthenticated) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
});

export default router;
