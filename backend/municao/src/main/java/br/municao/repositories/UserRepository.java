package br.municao.repositories;

import br.municao.dto.UserDTO;
import br.municao.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * A interface UserRepository é responsável por definir operações de acesso a dados relacionadas
 * à entidade UserModel.
 */
public interface UserRepository extends JpaRepository<UserModel, Long> {

    @Query("select u from UserModel u where lower(u.nome) like lower(concat('%', ?1, '%'))")
    List<UserDTO> findByUsuarioNameDto(String nome);

    @Query("SELECT u FROM UserModel u WHERE u.email = :email AND u.senha = :senha")
    UserModel findByEmailAndSenha(@Param("email") String email, @Param("senha") String senha);
}
