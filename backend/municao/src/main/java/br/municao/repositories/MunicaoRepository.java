package br.municao.repositories;

import br.municao.models.MunicaoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MunicaoRepository extends JpaRepository<MunicaoModel, Long> {
}
