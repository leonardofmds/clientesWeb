import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulta-clientes',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css'
})
export class ConsultaClientesComponent {
  clientes: any[] = [];

  ngOnInit(): void {
    // Aqui você pode substituir por uma chamada real via serviço (HttpClient)
    this.clientes = [
      {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        nome: 'Maria Silva',
        email: 'maria@exemplo.com',
        cpf: '12345678900',
        dataNascimento: '1980-05-01',
        enderecos: [
          {
            id: '1',
            logradouro: 'Rua das Flores',
            complemento: 'Apto 101',
            numero: '100',
            bairro: 'Centro',
            cidade: 'São Paulo',
            uf: 'SP',
            cep: '01000-000'
          }
        ]
      }
    ];
  }

  excluirCliente(id: string): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      // Aqui você integraria com um serviço para deletar via API
      console.log('Cliente excluído com ID:', id);
      this.clientes = this.clientes.filter(c => c.id !== id);
    }
  }
}
