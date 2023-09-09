package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Data
@Table(name = "tb_municao")
public class MunicaoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @CreatedDate
    @Column(name = "data_cadastro")
    private Date dataCadastro = new Date();

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "calibre", nullable = false)
    private Double calibre;

    @Column(name = "peso", nullable = false)
    private Double peso;

    @Column(name = "quantidade")
    private long quantidade;
}
