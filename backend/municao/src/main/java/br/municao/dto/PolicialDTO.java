package br.municao.dto;

import br.municao.models.PolicialModel;
import jakarta.persistence.Column;

public class PolicialDTO {

    private String nome;
    private String cpf;
    private String qra;
    private String matricula;

    public PolicialDTO(PolicialModel policial){
        this.nome = policial.getNome();
        this.cpf = policial.getCpf();
        this.qra = policial.getQra();
        this.matricula = policial.getMatricula();
    }
}
