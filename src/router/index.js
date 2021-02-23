import Vue from "vue";
import VueRouter from "vue-router";
import panelRouter from './modules/panel'
Vue.use(VueRouter);

const routes = [ 
  {
    path: "/",
    name: "main",
    component: ()=>import("@/views/main"),
    children:[ 
    ...panelRouter
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});
const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router;
