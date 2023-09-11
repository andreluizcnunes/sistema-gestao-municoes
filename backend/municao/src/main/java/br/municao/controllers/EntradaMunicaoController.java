package br.municao.controllers;

import br.municao.models.EntradaMunicaoModel;
import br.municao.services.EntradaMunicaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/entradaestoque")
public class EntradaMunicaoController {

    private final EntradaMunicaoService entradaMunicaoService;

    public EntradaMunicaoController(EntradaMunicaoService entradaMunicaoService){
        this.entradaMunicaoService = entradaMunicaoService;
    }

    @PostMapping("/newentrada")
    public ResponseEntity<String> atualizarEstoqueMunicao(@RequestBody EntradaMunicaoModel entradaMunicao) {
        try {
            entradaMunicaoService.newEntradaMunicao(entradaMunicao);
            return new ResponseEntity<>("Estoque de munição atualizado com sucesso", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao atualizar o estoque de munição: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
