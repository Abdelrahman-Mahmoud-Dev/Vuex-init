import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Product from '../components/Product.vue';
// import ContactUs from '../components/ContactUs.vue';
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/Home',
			component: Home,
		},
		{
			path: '/Product/:id',
			component: Product,
		},
		{
			path: '/About',
			component: About,
		},
	],
});
export default router;
