export type NotasDTO = {
    numero_nota: string;
    client: string;
    destinatario: string;
    endereco_destinatario: string;
    cidade: string;
    peso: number;
    valor_nota: number;
    tipo_produto?: string;
}