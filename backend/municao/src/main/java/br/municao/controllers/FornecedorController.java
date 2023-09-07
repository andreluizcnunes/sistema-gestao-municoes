package br.municao.controllers;

import br.municao.dto.FornecedorDTO;
import br.municao.models.FornecedorModel;
import br.municao.services.FornecedorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Esta classe é responsável por controlar as operações relacionadas a fornecedores.
 * Ela fornece endpoints para listar, cadastrar e editar fornecedores.
 */

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController {

    private final FornecedorService fornecedorService;

    /**
     * Construtor da classe FornecedorController.
     *
     * @param fornecedorService O serviço responsável por lidar com operações de fornecedores.
     */
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

    /**
     * Endpoint para cadastrar um novo fornecedor.
     *
     * @param newFornecedor O objeto FornecedorModel contendo os dados do novo fornecedor a ser cadastrado.
     * @return Um objeto ResponseEntity representando o resultado da operação.
     */
    @PostMapping("/cadastrar")
    public ResponseEntity<?> registerNewFornecedor(@RequestBody FornecedorModel newFornecedor){
        return fornecedorService.registerFornecedor(newFornecedor);
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
}
