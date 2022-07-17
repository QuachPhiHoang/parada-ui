import HomePage from '~/pages/Home';
import MenPage from '~/pages/Men';
import WomenPage from '~/pages/Women';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/men', component: MenPage },
    { path: '/women', component: WomenPage },
];

export { publicRoutes };
