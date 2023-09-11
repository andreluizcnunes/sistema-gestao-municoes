package br.municao.repositories;

import br.municao.models.SaidaMunicaoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaidaMunicaoRepository extends JpaRepository<SaidaMunicaoModel, Long> {
}
