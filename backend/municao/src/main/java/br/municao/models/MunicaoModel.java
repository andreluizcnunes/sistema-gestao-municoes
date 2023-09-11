package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Table(name = "tb_municao")
public class MunicaoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_municao")
    private long id;

    @CreatedDate
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro = LocalDate.now();

    @Column(name = "nome_municao", nullable = false)
    private String nome;

    @Column(name = "calibre_municao", nullable = false)
    private String calibre;

    @Column(name = "peso_municao", nullable = false)
    private Double peso;

    @Column(name = "quantidade_municao")
    private long quantidade;

    @ManyToOne
    @JoinColumn(name = "id_marca")
    private MarcaModel marca;

    @OneToMany(mappedBy = "municao")
    private List<EntradaMunicaoModel> entrada;

    @OneToMany(mappedBy = "municao")
    private List<SaidaMunicaoModel> saidaMunicao;

    @OneToMany(mappedBy = "municao")
    private List<EmprestimoMunicaoModel> emprestimoMunicao;

    @OneToOne(mappedBy = "municao")
    private DevolucaoMunicaoPolicalModel devolucao;
}
