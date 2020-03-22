import App from './App';
import Sobre from './Sobre';
import Contador from './Contador';
import Timer from './Timer';
import Form from './Form';
import Users from './Users';

const routes = [
    { description: 'Home', path: '/', component: App, exact: true },
    { description: 'Contador', path: '/Contador', component: Contador },
    { description: 'Timer', path: '/Timer', component: Timer },
    { description: 'Form', path: '/Form', component: Form },
    { description: 'Users', path: '/Users', component: Users },
    { description: 'Sobre', path: '/Sobre', component: Sobre }
]


export default routes;