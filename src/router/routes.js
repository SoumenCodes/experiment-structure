const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/register",
        name: "register",
        component: () => import("../pages/RegisterPage.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("../pages/LoginPage.vue"),
      },
      {
        path: "/product",
        name: "product",
        component: () => import("../pages/ProductTable.vue"),
      },
      {
        name: "counter",
        path: "/counter",
        component: () => import("../pages/Counter.vue"),
      },
      {
        path: "/post",
        name: "post",
        component: () => import("../pages/PostPage.vue"),
      },
      {
        path: "/listing",
        name: "ListingItems",
        component: () => import("../pages/ListingItems.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
