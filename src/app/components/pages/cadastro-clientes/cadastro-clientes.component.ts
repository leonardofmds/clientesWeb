import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { cepValidator, cpfValidator } from '../../validators/validators';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../configurations/environments';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-cadastro-clientes',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  templateUrl: './cadastro-clientes.component.html',
  styleUrl: './cadastro-clientes.component.css'
})
export class CadastroClientesComponent {

  form!: FormGroup;

  mensagemSucesso : string = '';
  mensagemErro : string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required, cpfValidator]),
      dataNascimento: new FormControl('', [Validators.required]),  // Espera formato ISO: yyyy-MM-dd
      endereco: new FormGroup({
        logradouro: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(200)]),
        complemento: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        numero: new FormControl('', [Validators.required]),
        bairro: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        cidade: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        uf: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
        cep: new FormControl('', [Validators.required, cepValidator])
      })
    });

  }

  //função auxiliar para verificar se cada foi preenchido corretamente
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value)

    this.http.post(endpoints.cadastrar_cliente, this.form.value).subscribe({
      next: (response) => {
        this.mensagemSucesso = `Cliente ${this.form.value.nome} cadastrado com sucesso!`;
        this.form.reset();
      },
      error: (error) => {
        this.mensagemErro = `Erro ao cadastrar cliente: ${error.error.message}`;
      }
    });

  }
}