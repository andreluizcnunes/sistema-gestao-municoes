package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "tb_saida_municao")
public class SaidaMunicaoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @CreatedDate
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro = LocalDate.now();

    @Column(name = "quantidade")
    private Long quantidade;

    @Column(name = "motivo_saida", nullable = false)
    private String motivoSaida;

    @ManyToOne
    @JoinColumn(name = "id_municao")
    private MunicaoModel municao;
}
