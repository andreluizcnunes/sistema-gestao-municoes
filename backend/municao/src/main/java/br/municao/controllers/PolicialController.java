package br.municao.controllers;

import br.municao.dto.PolicialDTO;
import br.municao.models.PolicialModel;
import br.municao.services.PolicialService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/policial")
public class PolicialController {

    private final PolicialService policialService;

    public PolicialController(PolicialService policialService){this.policialService = policialService;}

    @GetMapping("/lista")
    public List<PolicialDTO> getAllPolicial(){return policialService.getAllPolicial();}

    @PostMapping("/cadastrar")
    public ResponseEntity<?> registerNewPolicial(@RequestBody PolicialModel newPolicial){
        return policialService.registerPolicial(newPolicial);
    }

    @PutMapping("/editar")
    public ResponseEntity<?> updatePolicial(@RequestBody PolicialModel policial){
        return policialService.updatePolicial(policial);
    }
}
