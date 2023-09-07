package br.municao.repositories;

import br.municao.models.MarcaModel;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Uma interface que estende JpaRepository para realizar operações de acesso a dados relacionadas à entidade MarcaModel.
 */
public interface MarcaRepository extends JpaRepository<MarcaModel, Long> {
}
