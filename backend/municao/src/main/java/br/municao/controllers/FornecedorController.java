package br.municao.controllers;

import br.municao.dto.FornecedorDTO;
import br.municao.models.FornecedorModel;
import br.municao.response.SmsResponse;
import br.municao.services.FornecedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Esta classe é responsável por controlar as operações relacionadas a fornecedores.
 * Ela fornece endpoints para listar, cadastrar e editar fornecedores.
 */

@RestController
@RequestMapping("/fornecedor")
@CrossOrigin(origins = "http://localhost:5173")
public class FornecedorController {

    private final FornecedorService fornecedorService;

    /**
     * Construtor da classe FornecedorController.
     *
     * @param fornecedorService O serviço responsável por lidar com operações de fornecedores.
     */
    @Autowired
    public FornecedorController(FornecedorService fornecedorService){
        this.fornecedorService = fornecedorService;
    }


    /**
     * Endpoint para obter a lista de todos os fornecedores.
     *
     * @return Uma lista de objetos FornecedorDTO que representam os fornecedores.
     */
    @GetMapping("/lista")
    public List<FornecedorDTO> getAllFornecedores(){
        return fornecedorService.getAllFornecedor();
    }

    @GetMapping("/lista/{id}")
    public Optional<FornecedorModel> getByIdFornecedor(@PathVariable Long id){
        return fornecedorService.getFornecedorById(id);
    }

    @GetMapping("/consultar/{razaoSocial}")
    public List<FornecedorModel> getFornecedorByRazaoSocial(@PathVariable String razaoSocial){
        return fornecedorService.buscarRazaoSocial(razaoSocial);
    }

    @GetMapping("/consultar")
    public List<FornecedorModel> getFornecedorByRazaoSocialLast(@RequestParam(name = "razaoSocial") String razaoSocial){
        return fornecedorService.buscarRazaoSocial(razaoSocial);
    }

    @GetMapping("/consultardto")
    public List<FornecedorDTO> getFornecedorByRazaoSocialLastDto(@RequestParam(name = "razaoSocial") String razaoSocial){
        return fornecedorService.findByRazaoSocialNew(razaoSocial);
    }

    /**
     * Endpoint para cadastrar um novo fornecedor.
     *
     * @param newFornecedor O objeto FornecedorModel contendo os dados do novo fornecedor a ser cadastrado.
     * @return Um objeto ResponseEntity representando o resultado da operação.
     */
    @PostMapping("/cadastrardto")
    public ResponseEntity<?> registerNewFornecedor(@RequestBody FornecedorModel newFornecedor){
        return fornecedorService.registerFornecedor(newFornecedor);
    }

    @PostMapping("/cadastrar")
    public FornecedorModel addFornecedor(@RequestBody FornecedorModel newFornecedor){
        return fornecedorService.addFornecedor(newFornecedor);
    }

    /**
     * Endpoint para editar um fornecedor existente.
     *
     * @param fornecedor O objeto FornecedorModel contendo os dados do fornecedor a ser editado.
     * @return Um objeto ResponseEntity representando o resultado da operação.
     */
    @PutMapping("/editar")
    public ResponseEntity<?> updateFornecedor(@RequestBody FornecedorModel fornecedor){
        return fornecedorService.updateFornecedor(fornecedor);
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<SmsResponse> deleteFornecedorId(@PathVariable Long id){
        return fornecedorService.deleteFornecedor(id);
    }
}
