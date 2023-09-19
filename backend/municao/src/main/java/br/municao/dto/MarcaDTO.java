package br.municao.dto;

import br.municao.models.MarcaModel;
import lombok.Getter;

/**
 * Esta classe representa um objeto de transferência de dados (DTO) para a entidade Marca.
 * Ela contém informações sobre o nome da marca.
 */
@Getter
public class MarcaDTO {

    private Long id;
    /**
     * O nome da marca.
     */
    private String nome;

    /**
     * Construtor para criar um objeto MarcaDTO com base em um objeto MarcaModel.
     *
     * @param marca O objeto MarcaModel do qual deseja-se criar o DTO.
     */
    public MarcaDTO(MarcaModel marca){
        this.id = marca.getId();
        this.nome = marca.getNome();
    }
}
