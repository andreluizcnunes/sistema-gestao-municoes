package br.municao.repositories;

import br.municao.models.EntradaMunicaoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EntradaMunicaoRepository extends JpaRepository<EntradaMunicaoModel, Long> {
    @Query("SELECT COUNT(e) FROM EntradaMunicaoModel e")
    long countTotalItems();
}
