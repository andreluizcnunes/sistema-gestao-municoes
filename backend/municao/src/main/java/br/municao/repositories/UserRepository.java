package br.municao.repositories;

import br.municao.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * A interface UserRepository é responsável por definir operações de acesso a dados relacionadas
 * à entidade UserModel.
 */
public interface UserRepository extends JpaRepository<UserModel, Long> {
}
