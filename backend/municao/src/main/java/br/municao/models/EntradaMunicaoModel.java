package br.municao.models;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;

@Entity
@Table(name = "entrada_municao")
public class EntradaMunicaoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @CreatedDate
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro = LocalDate.now();

    @Column(name = "quantidade")
    private Long quantidade;

    @ManyToOne
    @JoinColumn(name = "id_municao")
    private MunicaoModel municao;
}
