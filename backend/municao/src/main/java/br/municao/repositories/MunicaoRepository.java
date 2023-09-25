package br.municao.repositories;

import br.municao.dto.MarcaDTO;
import br.municao.dto.MunicaoDTO;
import br.municao.models.MunicaoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MunicaoRepository extends JpaRepository<MunicaoModel, Long> {

    @Query("select m from MunicaoModel m where m.nome like %?1%")
    List<MunicaoDTO> findByNomeMunicaoDto(String nome);
}
