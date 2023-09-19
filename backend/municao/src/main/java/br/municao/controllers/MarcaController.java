package br.municao.controllers;

import br.municao.dto.MarcaDTO;
import br.municao.models.MarcaModel;
import br.municao.response.SmsResponse;
import br.municao.services.MarcaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Esta classe é um controlador para a entidade Marca.
 * Ela lida com operações relacionadas à Marca, como buscar todas as marcas, cadastrar uma nova marca e atualizar uma marca existente.
 */
@RestController
@RequestMapping("/marca")
@CrossOrigin(origins = "http://localhost:5173")
public class MarcaController {
    private final MarcaService marcaService;

    /**
     * Construtor para o controlador MarcaController.
     *
     * @param marcaService O serviço de Marca que será injetado no controlador.
     */
    public MarcaController(MarcaService marcaService){
        this.marcaService = marcaService;
    }

    /**
     * Retorna todas as marcas cadastradas.
     *
     * @return Uma lista de objetos MarcaDTO representando todas as marcas.
     */
    @GetMapping("/listar")
    public List<MarcaDTO> getAllMarca(){
        return  marcaService.getAllMarca();
    }

    @GetMapping("/consultar")
    public List<MarcaDTO> getMarcaByName(@RequestParam(name = "nome") String nome){
        return marcaService.findByNomeDto(nome);
    }

    /**
     * Cadastra uma nova marca.
     *
     * @param newMarca O objeto MarcaModel a ser cadastrado.
     * @return Uma resposta ResponseEntity indicando o resultado da operação.
     */
    @PostMapping("/cadastrar")
    public ResponseEntity<?> registerNewMarca(@RequestBody MarcaModel newMarca){
        return marcaService.registerMarca(newMarca);
    }

    /**
     * Atualiza uma marca existente.
     *
     * @param marca O objeto MarcaModel a ser atualizado.
     * @return Uma resposta ResponseEntity indicando o resultado da operação.
     */
    public ResponseEntity<?> updateMarca(@RequestBody MarcaModel marca){
        return marcaService.updateMarca(marca);
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<SmsResponse> deletarMarcaId(@PathVariable Long id){
        return marcaService.deleteMarca(id);
    }

}
