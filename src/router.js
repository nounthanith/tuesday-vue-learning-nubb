import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/home",
			component: () => import("./components/Ch7/Home.vue"),
			children: [
				{
					path: '',
					name: '',
					component: () => import("./components/Ch7/Home.vue"),
				}
			]
		},
		{
			path: "/about",
			name: "About",
			component: () => import("./components/Ch7/About.vue")
		},
		{
			path: "/students/:id",
			name: "Students",
			component: () => import("./components/Ch7/StudentList.vue"),
			props: (route) => {
				return {
					studentId: route.params.id,
					studentsName: `Student ${route.params.id}`,
					gender: "male",
					age: 20
				}
			}
		},
		{
			path: "/",
			name: "Login",
			component: () => import("./components/Ch7/Login.vue"),

		}
	]
});

export default router;