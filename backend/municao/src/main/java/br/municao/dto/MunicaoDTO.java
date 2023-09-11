package br.municao.dto;

import br.municao.models.MunicaoModel;
import lombok.Getter;

@Getter
public class MunicaoDTO {


    private String nome;
    private String calibre;
    private double peso;
    private long quantidade;

    public MunicaoDTO(MunicaoModel municao){
        this.nome = municao.getNome();
        this.calibre = municao.getCalibre();
        this.peso = municao.getPeso();
        this.quantidade = municao.getQuantidade();
    }
}
