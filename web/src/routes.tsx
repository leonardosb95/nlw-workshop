import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes(){
// Toda que eu acessar /, ele vai para o componente Landing
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={OrphanagesMap}/>
        </Switch>
        </BrowserRouter>
    );
}

// Exportar o componente
// Nessa versão precisamos importar o React
export default Routes;