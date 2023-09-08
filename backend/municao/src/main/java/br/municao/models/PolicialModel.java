package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "tb_policial")
public class PolicialModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cpf", nullable = false)
    private String cpf;

    @Column(name = "rg")
    private String rg;

    @Column(name = "qra")
    private String qra;

    @Column(name = "data_nascimento", nullable = false)
    private String dataNascimento;

    @Column(name = "telefone")
    private String telefone;

    @Column(name = "matricula")
    private String matricula;

    @Column(name = "senha", nullable = false)
    private String senha;
}
