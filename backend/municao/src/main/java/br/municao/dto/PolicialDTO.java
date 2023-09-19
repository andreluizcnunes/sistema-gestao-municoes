package br.municao.dto;

import br.municao.models.PolicialModel;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class PolicialDTO {

    @JsonProperty("id")
    private Long id;
    @JsonProperty("nome")
    private String nome;

    @JsonProperty("cpf")
    private String cpf;

    @JsonProperty("telefone")
    private String telefone;

    public PolicialDTO(PolicialModel policial){
        this.id = policial.getId();
        this.nome = policial.getNome();
        this.cpf = policial.getCpf();
        this.telefone = policial.getTelefone();
    }
}
