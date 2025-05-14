import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cpfValidator(control: AbstractControl): ValidationErrors | null {
  const cpf = control.value?.replace(/\D/g, '');

  if (!cpf || cpf.length !== 11) return { cpfInvalido: true };

  // Elimina CPFs inválidos conhecidos
  if (/^(\d)\1+$/.test(cpf)) return { cpfInvalido: true };

  // Valida dígitos verificadores
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
  let digito1 = 11 - (soma % 11);
  if (digito1 >= 10) digito1 = 0;
  if (digito1 !== parseInt(cpf[9])) return { cpfInvalido: true };

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
  let digito2 = 11 - (soma % 11);
  if (digito2 >= 10) digito2 = 0;
  if (digito2 !== parseInt(cpf[10])) return { cpfInvalido: true };

  return null; // CPF válido
}

export function cepValidator(control: AbstractControl): ValidationErrors | null {
  const cep = control.value?.replace(/\D/g, ''); // Remove caracteres não numéricos

  if (!cep || cep.length !== 8) {
    return { cepInvalido: true };
  }

  return null; // CEP válido
}
