package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "tb_devolucao_municao_policial")
public class DevolucaoMunicaoPolicalModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @CreatedDate
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro = LocalDate.now();

    @Column(name = "quantidade", nullable = false)
    private Long quantidade;

    @Column(name = "motivo_devolucao_parcial")
    private String motivoDevolucaoParcial;

    @ManyToOne
    @JoinColumn(name = "id_municao")
    private MunicaoModel municao;

    @ManyToOne
    @JoinColumn(name = "id_policial")
    private PolicialModel policial;

    @OneToOne
    @JoinColumn(name = "id_emprestimo_municao")
    private EmprestimoMunicaoModel emprestimoMunicao;
}
