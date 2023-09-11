package br.municao.controllers;

import br.municao.dto.MunicaoDTO;
import br.municao.models.MunicaoModel;
import br.municao.services.MunicaoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/municao")
public class MunicaoController {

    private final MunicaoService municaoService;

    public MunicaoController(MunicaoService municaoService){
        this.municaoService = municaoService;
    }

    @GetMapping("/listaDTO")
    public List<MunicaoDTO> getAllMunicaoDTO(){return municaoService.getAllMunicaoDTO();}

    @GetMapping("/listar")
    public ResponseEntity<List<MunicaoModel>> getAllMunicao(){
        List<MunicaoModel> municoes = municaoService.getAllMunicao();
        return ResponseEntity.ok(municoes);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> registerNewMunicao(@RequestBody MunicaoModel newMunicao){
        return municaoService.registerMunicao(newMunicao);
    }

    @PutMapping("/editar")
    public ResponseEntity<?> updateMunicao(@RequestBody MunicaoModel municao){
        return municaoService.updateMunicao(municao);
    }
}
