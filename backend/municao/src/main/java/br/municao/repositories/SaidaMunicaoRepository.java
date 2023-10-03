package br.municao.repositories;

import br.municao.models.SaidaMunicaoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SaidaMunicaoRepository extends JpaRepository<SaidaMunicaoModel, Long> {

    @Query("SELECT COUNT(s) FROM SaidaMunicaoModel s")
    long countTotalItems();
}
