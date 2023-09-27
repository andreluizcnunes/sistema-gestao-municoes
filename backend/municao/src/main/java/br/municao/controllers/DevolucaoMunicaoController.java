package br.municao.controllers;

import br.municao.models.DevolucaoMunicaoPolicalModel;
import br.municao.models.EntradaMunicaoModel;
import br.municao.services.DevolucaoMunicaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/devolucao-municao")
public class DevolucaoMunicaoController {

    private final DevolucaoMunicaoService devolucaoMunicaoService;

    public DevolucaoMunicaoController(DevolucaoMunicaoService devolucaoMunicaoService){
        this.devolucaoMunicaoService = devolucaoMunicaoService;
    }

    @PostMapping("/devolucao")
    public ResponseEntity<String> devolucao(@RequestBody DevolucaoMunicaoPolicalModel devolucao) {
        try {
            devolucaoMunicaoService.devolucao(devolucao);
            return new ResponseEntity<>("Estoque de munição atualizado com sucesso", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao atualizar o estoque de munição: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
