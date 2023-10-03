package br.municao.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

/**
 * A classe FornecedorModel representa um fornecedor de produtos ou serviços.
 * É uma entidade mapeada para a tabela "tb_fornecedor" no banco de dados.
 */
@Entity
@Data
@Table(name = "tb_fornecedor")
public class FornecedorModel implements Serializable {

    /**
     * O identificador único do fornecedor no banco de dados.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @CreatedDate
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro = LocalDate.now();

    /**
     * A razão social do fornecedor.
     * Deve ser uma informação obrigatória e não nula.
     */
    @Column(name = "razao_social", nullable = false)
    private String razaoSocial;

    /**
     * O CNPJ (Cadastro Nacional da Pessoa Jurídica) do fornecedor.
     * Deve ser uma informação obrigatória e não nula.
     */
    @Column(name = "cnpj", nullable = false)
    private String cnpj;

    /**
     * A inscrição estadual do fornecedor, se aplicável.
     * Esta informação pode ser opcional.
     */
    @Column(name = "inscricao")
    private String inscricao;

    @OneToMany(mappedBy = "fornecedor")
    private List<EntradaMunicaoModel> entrada;

}
