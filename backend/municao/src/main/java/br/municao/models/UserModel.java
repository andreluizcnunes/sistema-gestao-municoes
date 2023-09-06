package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;

/**
 * Esta classe representa um modelo de usuário no sistema.
 */
@Entity
@Data
@Table(name = "tb_users")
public class UserModel {

    /**
     * O ID único do usuário.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    /**
     * O nome do usuário.
     */
    @Column(name = "nome", nullable = false)
    private String nome;

    /**
     * O endereço de e-mail do usuário.
     */
    @Column(name = "email", nullable = false)
    private String email;

    /**
     * A senha do usuário (deve ser armazenada de forma segura).
     */
    @Column(name = "senha", nullable = false)
    private String senha;
}
