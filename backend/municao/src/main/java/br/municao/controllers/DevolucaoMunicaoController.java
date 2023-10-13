package br.municao.controllers;

import br.municao.models.DevolucaoMunicaoPolicalModel;
import br.municao.services.DevolucaoMunicaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/devolucao-municao")
@CrossOrigin(origins = "http://localhost:5173")
public class DevolucaoMunicaoController {

    private final DevolucaoMunicaoService devolucaoMunicaoService;

    public DevolucaoMunicaoController(DevolucaoMunicaoService devolucaoMunicaoService){
        this.devolucaoMunicaoService = devolucaoMunicaoService;
    }

    @GetMapping("/listar")
    public List<DevolucaoMunicaoPolicalModel> listAllDevolucaoC(){
        return devolucaoMunicaoService.listAllDevolucaoS();
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
