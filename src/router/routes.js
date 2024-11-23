const routes = [
  {
    path: "/account/login",
    children: [
      { path: "", component: () => import("src/pages/LoginPage.vue") },
    ],
  },

  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/DashboardPage.vue") },
    ],
  },

  {
    path: "/reports",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/ReportPage.vue") },
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
