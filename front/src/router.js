import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/addStudent",
    name: "add-student",
    component: () => import("./components/AddStudent")
  },
  {
    path: "/students",
    name: "students",
    component: () => import("./components/StudentsList")
  },
  {
    path: "/students/:id",
    name: "student-details",
    component: () => import("./components/Student")
  },
  {
    path: "/courses",
    name: "courses",
    component: () => import("./components/CoursesList")
  },
  {
    path: "/addCourse",
    name: "add-course",
    component: () => import("./components/AddCourse")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;