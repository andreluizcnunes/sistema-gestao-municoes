package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;


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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    /**
     * O nome da Marca. Não pode ser nulo.
     */
    @Column(name = "nome", nullable = false)
    private String nome;
}
