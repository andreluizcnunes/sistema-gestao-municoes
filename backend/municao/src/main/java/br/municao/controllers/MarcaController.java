package br.municao.controllers;

import br.municao.dto.MarcaDTO;
import br.municao.models.MarcaModel;
import br.municao.services.MarcaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/marca")
public class MarcaController {

    private final MarcaService marcaService;

    public MarcaController(MarcaService marcaService){
        this.marcaService = marcaService;
    }

    @GetMapping("lsta")
    public List<MarcaDTO> getAllMarca(){
        return  marcaService.getAllMarca();
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> registerNewMarca(@RequestBody MarcaModel newMarca){
        return marcaService.registerMarca(newMarca);
    }

    public ResponseEntity<?> updateMarca(@RequestBody MarcaModel marca){
        return marcaService.updateMarca(marca);
    }


}
