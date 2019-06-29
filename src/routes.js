import home from './components/main.vue'
import login from './components/admin/login.vue'

export function routes(){
    return [{
            path:'/home',
            name :'home',
            component:home,
        },
        {
            path:'/admin',
            name:'admin',
            component:login,
        },
        {       
            path:'*',
            redirect:'/home'
        }        
    ]
}