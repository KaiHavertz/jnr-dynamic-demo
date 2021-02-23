export default[
   {
    path: "/jnrHeaderNav",
    name: "jnrHeaderNav",
    component: () =>
      import("@/components/jnr/jnrHeaderNav.vue")
  }, {
    path: "/jnrDialog",
    name: "jnrDialog",
    component: () =>
      import("@/components/jnr/jnrDialog.vue")
  },{
    path: "/jnrTabs",
    name: "jnrTabs",
    component: () =>
      import("@/components/jnr/jnrTabs.vue")
  },{
    path: "/jnrAsideNav",
    name: "jnrAsideNav",
    component: () =>
      import("@/components/jnr/jnrAsideNav.vue")
  },
]

