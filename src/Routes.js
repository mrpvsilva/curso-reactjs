import App from './App';
import Sobre from './Sobre';
import Contador from './Contador';
import Timer from './Timer';
import Form from './Form';
import Users from './Users';
import Http from './Http';
import Filmes from './Filmes';

const routes = [
    { description: 'Home', path: '/', component: App, exact: true },
    { description: 'Contador', path: '/Contador', component: Contador },
    { description: 'Timer', path: '/Timer', component: Timer },
    { description: 'Form', path: '/Form', component: Form },
    { description: 'Users', path: '/Users', component: Users },
    { description: 'Http', path: '/Http', component: Http },
    { description: 'Filmes', path: '/Filmes', component: Filmes },
    { description: 'Sobre', path: '/Sobre', component: Sobre }
]


export default routes;