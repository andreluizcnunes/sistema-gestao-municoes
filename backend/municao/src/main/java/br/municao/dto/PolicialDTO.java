package br.municao.dto;

import br.municao.models.PolicialModel;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class PolicialDTO {

    @JsonProperty("nome")
    private String nome;

    @JsonProperty("cpf")
    private String cpf;

    @JsonProperty("telefone")
    private String telefone;

    public PolicialDTO(PolicialModel policial){
        this.nome = policial.getNome();
        this.cpf = policial.getCpf();
        this.telefone = policial.getTelefone();
    }
}
