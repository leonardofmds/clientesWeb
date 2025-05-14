import { Routes } from '@angular/router';
import { CadastroClientesComponent } from './components/pages/cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './components/pages/consulta-clientes/consulta-clientes.component';
import { EdicaoClientesComponent } from './components/pages/edicao-clientes/edicao-clientes.component';

export const routes: Routes = [
    {
        path: 'pages/cadastro-clientes',
        component: CadastroClientesComponent
    },
    {
        path: 'pages/consulta-clientes',
        component: ConsultaClientesComponent
    },
    {
        path: 'pages/edicao-clientes',
        component: EdicaoClientesComponent
    }
];
