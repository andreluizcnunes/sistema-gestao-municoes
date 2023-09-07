package br.municao.dto;

import br.municao.models.FornecedorModel;
import jakarta.persistence.Column;
import lombok.Getter;

/**
 * A classe FornecedorDTO representa um objeto de transferência de dados (DTO) para informações de fornecedor.
 * É usada para encapsular informações específicas do fornecedor a serem transferidas entre diferentes partes do sistema.
 */
@Getter
public class FornecedorDTO {

    /**
     * O nome da razão social do fornecedor.
     */
    private String razaoSocial;
    /**
     * O número de CNPJ (Cadastro Nacional da Pessoa Jurídica) do fornecedor.
     */
    private String cnpj;
    /**
     * O número de inscrição do fornecedor.
     */
    private String inscricao;

    /**
     * Construtor da classe FornecedorDTO que recebe um objeto FornecedorModel como parâmetro e cria uma instância DTO com base nos dados desse modelo.
     *
     * @param fornecedor O objeto FornecedorModel do qual os dados serão copiados para criar este objeto FornecedorDTO.
     */
    public FornecedorDTO(FornecedorModel fornecedor){
        this.razaoSocial = fornecedor.getRazaoSocial();
        this.cnpj = fornecedor.getCnpj();
        this.inscricao = fornecedor.getInscricao();
    }
}
