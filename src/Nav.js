import Contador from './Pages/Contador';
import Timer from './Pages/Timer';
import Http from './Pages/Http';
import Filmes from './Pages/Filmes';
import Sobre from './Pages/Sobre';
import Home from './Pages/Home';
import Exercicio from './Pages/Exercicio';

export default  [
    { description: 'Home', path: '/home', component: Home },
    { description: 'Contador', path: '/contador', component: Contador },
    { description: 'Timer', path: '/timer', component: Timer },
    { description: 'Http', path: '/http', component: Http },
    { description: 'Filmes', path: '/filmes', component: Filmes },
    { description: 'Exercício', path: '/exercicio', component: Exercicio },
    { description: 'Sobre', path: '/sobre', component: Sobre }
]

