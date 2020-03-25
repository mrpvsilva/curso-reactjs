import Contador from './Contador';
import Timer from './Timer';
import Users from './Users';
import Http from './Http';
import Filmes from './Filmes';
import Sobre from './Sobre';

export const Nav = [
    { description: 'Contador', path: '/Contador', component: Contador },
    { description: 'Timer', path: '/Timer', component: Timer },
    { description: 'Users', path: '/Users', component: Users },
    { description: 'Http', path: '/Http', component: Http },
    { description: 'Filmes', path: '/Filmes', component: Filmes },
    { description: 'Sobre', path: '/Sobre', component: Sobre }
]

