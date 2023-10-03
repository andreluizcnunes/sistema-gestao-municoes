package br.municao.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

/**
 * Esta classe representa um modelo de usuário no sistema.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tb_users")
public class UserModel implements Serializable {

    /**
     * O ID único do usuário.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @CreatedDate
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro = LocalDate.now();

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
