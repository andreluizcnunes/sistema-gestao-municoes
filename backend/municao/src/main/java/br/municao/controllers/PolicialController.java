package br.municao.controllers;

import br.municao.dto.PolicialDTO;
import br.municao.models.PolicialModel;
import br.municao.response.SmsResponse;
import br.municao.services.PolicialService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/policial")
@CrossOrigin(origins = "http://localhost:5173")
public class PolicialController {

    private final PolicialService policialService;

    public PolicialController(PolicialService policialService){this.policialService = policialService;}

    @GetMapping("/lista")
    public List<PolicialModel> getAllPolicial(){return policialService.getAllPolicial();}

    @GetMapping("/consultar")
    public List<PolicialDTO> getPolicialByNomeDto(@RequestParam(name = "nome") String nome){
        return policialService.getByPolicialForname(nome);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> registerNewPolicial(@RequestBody PolicialModel newPolicial){
        return policialService.registerPolicial(newPolicial);
    }

    @PutMapping("/editar")
    public ResponseEntity<?> updatePolicial(@RequestBody PolicialModel policial){
        return policialService.updatePolicial(policial);
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<SmsResponse> deletarPolificalById(@PathVariable Long id){
        return policialService.deletePolicial(id);
    }
}
