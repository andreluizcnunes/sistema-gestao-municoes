package br.municao.repositories;

import br.municao.dto.MunicaoDTO;
import br.municao.models.MunicaoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MunicaoRepository extends JpaRepository<MunicaoModel, Long> {

    @Query("select m from MunicaoModel m where lower(m.nome) like lower(concat('%', ?1, '%'))")
    List<MunicaoDTO> findByNomeMunicaoDto(String nome);

    @Query("SELECT COUNT(m) FROM MunicaoModel m")
    long countTotalItems();

    @Query("SELECT COUNT(m) FROM MunicaoModel m WHERE m.quantidade < 1000")
    long countMunicoesComQuantidadeMenorQue1000();

    @Query("SELECT COUNT(m) FROM MunicaoModel m WHERE m.quantidade > 1000 AND m.quantidade < 3000")
    long countMunicoesComQuantidadeMenorQue3000();
}
