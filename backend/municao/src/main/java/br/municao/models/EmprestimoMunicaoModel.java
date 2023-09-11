package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "tb_emprestimo_municao")
public class EmprestimoMunicaoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @CreatedDate
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro = LocalDate.now();

    @Column(name = "quantidade", nullable = false)
    private Long quantidade;

    @Column(name = "motivo_emprestimo", nullable = false)
    private String motivoEmprestimo;

    @ManyToOne
    @JoinColumn(name = "id_municao")
    private MunicaoModel municao;

    @ManyToOne
    @JoinColumn(name = "id_policial")
    private PolicialModel policial;
}
