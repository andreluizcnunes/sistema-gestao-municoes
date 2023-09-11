package br.municao.controllers;

import br.municao.services.EmprestimoMunicaoService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/emprestimo-municao")
public class EmprestimoMunicaoController {

    private final EmprestimoMunicaoService emprestimoMunicaoService;

    public EmprestimoMunicaoController(EmprestimoMunicaoService emprestimoMunicaoService){
        this.emprestimoMunicaoService = emprestimoMunicaoService;
    }
}
