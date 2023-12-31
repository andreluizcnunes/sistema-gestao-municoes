package br.municao.controllers;

import br.municao.dto.MunicaoDTO;
import br.municao.models.MarcaModel;
import br.municao.models.MunicaoModel;
import br.municao.response.SmsResponse;
import br.municao.services.MarcaService;
import br.municao.services.MunicaoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/municao")
@CrossOrigin(origins = "http://localhost:5173")
public class MunicaoController {

    private final MunicaoService municaoService;

    private final MarcaService marcaService;

    public MunicaoController(MunicaoService municaoService, MarcaService marcaService){
        this.municaoService = municaoService;
        this.marcaService = marcaService;
    }

    @GetMapping("/listaDTO")
    public List<MunicaoDTO> getAllMunicaoDTO(){return municaoService.getAllMunicaoDTO();}

    @GetMapping("/listar")
    public List<MunicaoModel> getAllMunicao(){
        return municaoService.getAllMunicao();
    }

    @GetMapping("/consultar")
    public List<MunicaoDTO> getMunicaoName(@RequestParam(name = "nome") String nome){
        return municaoService.getMunicaoByname(nome);
    }

    @GetMapping("/total")
    public long countTotalController(){
        return municaoService.countTotal();
    }

    @GetMapping("/estoqueBaixoUrgente")
    public long estoqueBaixoCUrgente(){
        return municaoService.estoqueBaixoS();
    }

    @GetMapping("/estoqueBaixo")
    public long estoqueBaixoC(){
        return municaoService.estoqueBaixoS3000();
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> registerNewMunicao(@RequestBody MunicaoModel newMunicao){
        Optional<MarcaModel> marcaOptional = marcaService.getMacarById(newMunicao.getMarca().getId());

        if (marcaOptional.isPresent()) {
            MarcaModel marcaSelecionada = marcaOptional.get();
            newMunicao.setMarca(marcaSelecionada);

            ResponseEntity<?> novaMunicao = municaoService.registerMunicao(newMunicao);
            return ResponseEntity.ok("Munição cadastrada com sucesso.");
        } else {
            return ResponseEntity.badRequest().body("Marca não encontrada com o ID fornecido.");
        }
    }

    @PutMapping("/editar")
    public ResponseEntity<?> updateMunicao(@RequestBody MunicaoModel municao){
        return municaoService.updateMunicao(municao);
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<SmsResponse> deletarMunicaoId(@PathVariable Long id){
        return municaoService.deleteMunicao(id);
    }
}
