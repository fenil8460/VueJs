
import {createHistroy,createRouter} from 'vue-router'
import App from '@/App.vue'
import User from '@/components/User'



const routes = [
    {
        path:"/",
        component:App,
        name:"App"
    },
    {
        path:"/user",
        component:User,
        name:"User"
    }
];

const history = createHistroy();
const router = createRouter({
    history,
    routes
});
export default router;