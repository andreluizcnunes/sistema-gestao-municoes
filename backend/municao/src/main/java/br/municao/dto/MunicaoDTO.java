package br.municao.dto;

import br.municao.models.MarcaModel;
import br.municao.models.MunicaoModel;


public class MunicaoDTO {

    private long id;
    private String nome;
    private String calibre;
    private long quantidade;

    private String marca;

    public MunicaoDTO(MunicaoModel municao){
        this.id = municao.getId();
        this.nome = municao.getNome();
        this.calibre = municao.getCalibre();
        this.quantidade = municao.getQuantidade();
        this.marca = municao.getMarca().getNome();
    }

    public long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getCalibre() {
        return calibre;
    }

    public long getQuantidade() {
        return quantidade;
    }

    public String getMarca() {
        return marca;
    }
}
