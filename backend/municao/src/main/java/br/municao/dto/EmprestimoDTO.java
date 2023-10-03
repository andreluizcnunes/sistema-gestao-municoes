package br.municao.dto;

import br.municao.models.EmprestimoMunicaoModel;
import lombok.Getter;

@Getter
public class EmprestimoDTO {

    private long id;
    private Long quantidade;
    private String motivoEmprestimo;

    private String policial;

    public EmprestimoDTO(EmprestimoMunicaoModel emprestimo){
        this.id = emprestimo.getId();
        this.quantidade = emprestimo.getQuantidade();
        this.motivoEmprestimo = emprestimo.getMotivoEmprestimo();
        this.policial = emprestimo.getPolicial().getNome();
    }
}
