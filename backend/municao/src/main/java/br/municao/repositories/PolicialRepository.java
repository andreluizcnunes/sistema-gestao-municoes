package br.municao.repositories;

import br.municao.dto.PolicialDTO;
import br.municao.models.PolicialModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PolicialRepository extends JpaRepository<PolicialModel, Long> {

    @Query("select p from PolicialModel p where lower(p.nome) like lower(concat('%', ?1, '%'))")
    List<PolicialDTO> findByNome(String nome);
}
