package br.municao.controllers;

import br.municao.models.EntradaMunicaoModel;
import br.municao.models.SaidaMunicaoModel;
import br.municao.services.SaidaMunicaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/estoquesaida")
public class SaidaMunicaoController {

    private final SaidaMunicaoService saidaMunicaoService;

    public SaidaMunicaoController(SaidaMunicaoService saidaMunicaoService){
        this.saidaMunicaoService = saidaMunicaoService;
    }

    @PostMapping("/saida")
    public ResponseEntity<String> saidaEstoqueMunicao(@RequestBody SaidaMunicaoModel saida) {
        try {
            saidaMunicaoService.saidaEstoqueMunicao(saida);
            return new ResponseEntity<>("Estoque de munição atualizado com sucesso", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao atualizar o estoque de munição: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
