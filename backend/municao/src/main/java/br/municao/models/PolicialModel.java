package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Table(name = "tb_policial")
public class PolicialModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @CreatedDate
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro = LocalDate.now();

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cpf", nullable = false)
    private String cpf;

    @Column(name = "rg")
    private String rg;

    @Column(name = "data_nascimento", nullable = false)
    private String dataNascimento;

    @Column(name = "telefone")
    private String telefone;

    @OneToMany(mappedBy = "policial")
    private List<EmprestimoMunicaoModel> emprestimoMunicao;

    @OneToMany(mappedBy = "policial")
    private List<DevolucaoMunicaoPolicalModel> devolucao;
}
