package br.municao.repositories;

import br.municao.dto.FornecedorDTO;
import br.municao.models.FornecedorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

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
    
    @Query("select f from FornecedorModel f where lower(f.razaoSocial) like lower(concat('%', ?1, '%'))")
    List<FornecedorModel> findByRazaoSocial(String razaoSocial);

    @Query("select f from FornecedorModel f where lower(f.razaoSocial) like lower(concat('%', ?1, '%'))")
    List<FornecedorDTO> findByRazaoSocialDto(String razaoSocial);
}
