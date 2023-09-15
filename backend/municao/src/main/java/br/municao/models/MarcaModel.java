package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;
import java.util.List;


/**
 * Esta classe representa o modelo de dados para uma entidade de Marca.
 */
@Entity
@Data
@Table(name = "tb_marca")
public class MarcaModel {

    /**
     * Identificador único para a Marca.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_marca")
    private long id;

    @CreatedDate
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro = LocalDate.now();

    /**
     * O nome da Marca. Não pode ser nulo.
     */
    @Column(name = "nome_marca", nullable = false)
    private String nome;

    @OneToMany(mappedBy = "marca", fetch = FetchType.EAGER)
    private List<MunicaoModel> municoes;
}
