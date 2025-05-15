const apiUrl = 'http://localhost:8085';

export const endpoints = {
    cadastrar_cliente: `${apiUrl}/api/clientes`,
    listar_clientes: `${apiUrl}/api/clientes`,
    atualizar_cliente: `${apiUrl}/api/clientes`,
    obter_cliente: (id: number) => `${apiUrl}/api/clientes/${id}`,
    excluir_cliente: (id: number) => `${apiUrl}/api/clientes/${id}`
};
    