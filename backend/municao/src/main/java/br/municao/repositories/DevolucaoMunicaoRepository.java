package br.municao.repositories;

import br.municao.models.DevolucaoMunicaoPolicalModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DevolucaoMunicaoRepository extends JpaRepository<DevolucaoMunicaoPolicalModel, Long> {
}
