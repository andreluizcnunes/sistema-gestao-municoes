package br.municao.dto;

import br.municao.models.PolicialModel;
import jakarta.persistence.Column;

public class PolicialDTO {

    private String nome;
    private String cpf;
    private String telefone;

    public PolicialDTO(PolicialModel policial){
        this.nome = policial.getNome();
        this.cpf = policial.getCpf();
        this.telefone = policial.getTelefone();
    }
}
