package br.municao.services;

import br.municao.dto.FornecedorDTO;
import br.municao.models.FornecedorModel;
import br.municao.models.UserModel;
import br.municao.repositories.FornecedorRepository;
import br.municao.response.SmsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Esta classe é responsável por fornecer serviços relacionados a fornecedores.
 */
@Service
public class FornecedorService {

    @Autowired
    public FornecedorRepository fornecedorRepository;

    public SmsResponse smsResponse;

    /**
     * Construtor para a classe FornecedorService.
     *
     * @param fornecedorRepository O repositório de fornecedores a ser injetado.
     */
    public FornecedorService(FornecedorRepository fornecedorRepository){
        this.fornecedorRepository = fornecedorRepository;
        this.smsResponse = new SmsResponse();
    }

    /**
     * Registra um novo fornecedor.
     *
     * @param newFornecedor O fornecedor a ser registrado.
     * @return ResponseEntity com o fornecedor registrado ou resposta de validação de erro.
     */
    public ResponseEntity<?> registerFornecedor(FornecedorModel newFornecedor){

        ResponseEntity<?> validationResponse = validateFields(newFornecedor);
        if(validationResponse != null){
            return validationResponse;
        }

        return new ResponseEntity<FornecedorModel>(fornecedorRepository.save(newFornecedor), HttpStatus.CREATED);
    }

    /**
     * Atualiza as informações de um fornecedor existente.
     *
     * @param fornecedor O fornecedor com informações atualizadas.
     * @return ResponseEntity com o fornecedor atualizado ou resposta de validação de erro.
     */
    public  ResponseEntity<?> updateFornecedor(FornecedorModel fornecedor){

        ResponseEntity<?> validationResponse = validateFields(fornecedor);
        if(validationResponse != null){
            return validationResponse;
        }

        return new ResponseEntity<FornecedorModel>(fornecedorRepository.save(fornecedor), HttpStatus.OK);
    }

    /**
     * Obtém todos os fornecedores registrados.
     *
     * @return Lista de objetos FornecedorDTO representando todos os fornecedores registrados.
     */
    public List<FornecedorDTO> getAllFornecedor(){
        List<FornecedorModel> fornecedor = fornecedorRepository.findAll();
        return fornecedor.stream().map(x -> new FornecedorDTO(x)).toList();
    }

    /**
     * Exclui um fornecedor com base no ID fornecido.
     *
     * @param id O ID do fornecedor a ser excluído.
     * @return ResponseEntity com uma mensagem de sucesso ou erro.
     */
    public ResponseEntity<SmsResponse> deleteFornecedor(Long id){
        fornecedorRepository.deleteById(id);
        smsResponse.setMessage("Fornecedor deletado com sucesso.");
        return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.OK);
    }

    /**
     * Valida os campos do fornecedor antes de registrar ou atualizar.
     *
     * @param fornecedor O fornecedor a ser validado.
     * @return ResponseEntity com uma mensagem de erro em caso de validação falha, ou null em caso de sucesso na validação.
     */
    private ResponseEntity<?> validateFields(FornecedorModel fornecedor) {

        if (fornecedor.getRazaoSocial().equals("")){
            // Define uma mensagem de erro
            smsResponse.setMessage("O campo 'Razão Social' é obrigatório");
            // Retorna uma resposta com status de erro
            return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.BAD_REQUEST);

        } else if (fornecedor.getCnpj().equals("")) {
            // Verifica se o email do usuário está vazio
            // Define uma mensagem de erro
            smsResponse.setMessage("O campo 'cnpj' é obrigatório");
            // Retorna uma resposta com status de erro
            return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.BAD_REQUEST);

        }
        return null; // Retorna null em caso de sucesso na validação
    }
}
