package br.municao.repositories;

import br.municao.models.MarcaModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarcaRepository extends JpaRepository<MarcaModel, Long> {
}
