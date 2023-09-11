package br.municao.controllers;

import br.municao.services.SaidaMunicaoService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/saida-municao")
public class SaidaMunicaoController {

    private final SaidaMunicaoService saidaMunicaoService;

    public SaidaMunicaoController(SaidaMunicaoService saidaMunicaoService){
        this.saidaMunicaoService = saidaMunicaoService;
    }
}
