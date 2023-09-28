package br.municao.repositories;

import br.municao.dto.MarcaDTO;
import br.municao.models.MarcaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Uma interface que estende JpaRepository para realizar operações de acesso a dados relacionadas à entidade MarcaModel.
 */
public interface MarcaRepository extends JpaRepository<MarcaModel, Long> {
    
    @Query("select m from MarcaModel m where lower(m.nome) like lower(concat('%', ?1, '%'))")
    List<MarcaDTO> findByNomeMarcaDto(String nome);
}
