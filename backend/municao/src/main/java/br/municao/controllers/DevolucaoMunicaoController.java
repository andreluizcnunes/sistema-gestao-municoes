package br.municao.controllers;

import br.municao.services.DevolucaoMunicaoService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/devolucao-municao")
public class DevolucaoMunicaoController {

    private final DevolucaoMunicaoService devolucaoMunicaoService;

    public DevolucaoMunicaoController(DevolucaoMunicaoService devolucaoMunicaoService){
        this.devolucaoMunicaoService = devolucaoMunicaoService;
    }
}
