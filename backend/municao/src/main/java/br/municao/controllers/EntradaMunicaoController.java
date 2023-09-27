package br.municao.controllers;

import br.municao.models.EntradaMunicaoModel;
import br.municao.models.MunicaoModel;
import br.municao.services.EntradaMunicaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/entradaestoque")
@CrossOrigin(origins = "http://localhost:5173")
public class EntradaMunicaoController {

    private final EntradaMunicaoService entradaMunicaoService;

    public EntradaMunicaoController(EntradaMunicaoService entradaMunicaoService){
        this.entradaMunicaoService = entradaMunicaoService;
    }

    @PostMapping("/newEntrada")
    public ResponseEntity<String> entradaEstoqueMunicao(@RequestBody EntradaMunicaoModel entradaMunicao) {
        try {
            entradaMunicaoService.newEntradaMunicao(entradaMunicao);
            return new ResponseEntity<>("Estoque de munição atualizado com sucesso", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao atualizar o estoque de munição: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
