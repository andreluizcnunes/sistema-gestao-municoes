package br.municao.repositories;

import br.municao.models.EntradaMunicaoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntradaMunicaoRepository extends JpaRepository<EntradaMunicaoModel, Long> {
}
