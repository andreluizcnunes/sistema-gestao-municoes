package br.municao.repositories;

import br.municao.models.EmprestimoMunicaoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmprestimoMunicaoRepository extends JpaRepository<EmprestimoMunicaoModel, Long> {
}
