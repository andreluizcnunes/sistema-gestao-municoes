package br.municao.repositories;

import br.municao.models.FornecedorModel;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * A interface FornecedorRepository é responsável por fornecer métodos para realizar operações de persistência
 * relacionadas à entidade FornecedorModel usando o Spring Data JPA.
 *
 * Esta interface estende JpaRepository, que é uma interface genérica fornecida pelo Spring Data JPA. Ela herda
 * métodos padrão para operações CRUD (Create, Read, Update e Delete) no banco de dados, simplificando o acesso
 * aos dados do fornecedor.
 *
 * @param <FornecedorModel> A classe de entidade que representa um fornecedor.
 * @param <Long> O tipo de dado da chave primária da entidade FornecedorModel.
 */
public interface FornecedorRepository extends JpaRepository<FornecedorModel, Long>{
}
