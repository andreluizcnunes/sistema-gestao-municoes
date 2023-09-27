package br.municao.controllers;

import br.municao.models.EmprestimoMunicaoModel;
import br.municao.models.EntradaMunicaoModel;
import br.municao.services.EmprestimoMunicaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/emprestimo-municao")
public class EmprestimoMunicaoController {

    private final EmprestimoMunicaoService emprestimoMunicaoService;

    public EmprestimoMunicaoController(EmprestimoMunicaoService emprestimoMunicaoService){
        this.emprestimoMunicaoService = emprestimoMunicaoService;
    }

    @PostMapping("/emprestar")
    public ResponseEntity<String> entradaEstoqueMunicao(@RequestBody EmprestimoMunicaoModel emprestar) {
        try {
            emprestimoMunicaoService.emprestar(emprestar);
            return new ResponseEntity<>("Estoque de munição atualizado com sucesso", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro ao atualizar o estoque de munição: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
