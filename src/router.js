import { createRouter, createWebHistory } from 'vue-router';

import MainVue from './pages/MainVue.vue';
import ProjectCard from './components/ProjectCard.vue';
import AboutVue from './pages/AboutVue.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
            {
                path: '/',
                name: 'home',
                component: MainVue
            },
            {
                path: '/about',
                name: 'about',
                component: AboutVue
            },
        ]
    });

export { router };