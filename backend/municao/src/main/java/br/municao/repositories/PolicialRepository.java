package br.municao.repositories;

import br.municao.models.PolicialModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PolicialRepository extends JpaRepository<PolicialModel, Long> {
}
