package br.municao.dto;

import br.municao.models.MarcaModel;
import lombok.Getter;

@Getter
public class MarcaDTO {

    private String nome;

    public MarcaDTO(MarcaModel marca){
        this.nome = marca.getNome();
    }
}
