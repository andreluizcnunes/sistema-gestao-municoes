package br.municao.services;

import br.municao.dto.MarcaDTO;
import br.municao.models.MarcaModel;
import br.municao.repositories.MarcaRepository;
import br.municao.response.SmsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Uma classe de serviço que lida com operações relacionadas à entidade MarcaModel.
 */
@Service
public class MarcaService {

    @Autowired
    MarcaRepository marcaRepository;

    public SmsResponse smsResponse;

    /**
     * Construtor para inicializar a classe de serviço e a resposta de SMS.
     *
     * @param marcaRepository O repositório de MarcaModel.
     */
    public MarcaService(MarcaRepository marcaRepository){
        this.marcaRepository = marcaRepository;
        this.smsResponse = new SmsResponse();
    }

    /**
     * Registra uma nova marca no sistema.
     *
     * @param newMarca A nova marca a ser registrada.
     * @return Uma resposta ResponseEntity com o objeto MarcaModel recém-criado e status HTTP 201 (Created).
     */
    public ResponseEntity<?> registerMarca(MarcaModel newMarca){

        ResponseEntity<?> validationResponse = validateFields(newMarca);
        if(validationResponse != null){
            return validationResponse;
        }

        return new ResponseEntity<MarcaModel>(marcaRepository.save(newMarca), HttpStatus.CREATED);
    }

    /**
     * Atualiza uma marca existente no sistema.
     *
     * @param marca A marca a ser atualizada.
     * @return Uma resposta ResponseEntity com o objeto MarcaModel atualizado e status HTTP 200 (OK).
     */
    public ResponseEntity<?> updateMarca(MarcaModel marca){

        ResponseEntity<?> validationResponse = validateFields(marca);
        if(validationResponse != null){
            return validationResponse;
        }

        return new ResponseEntity<MarcaModel>(marcaRepository.save(marca), HttpStatus.OK);
    }

    /**
     * Obtém todas as marcas no sistema.
     *
     * @return Uma lista de objetos MarcaDTO representando todas as marcas.
     */
    public List<MarcaDTO> getAllMarca(){
        List<MarcaModel> marca = marcaRepository.findAll();
        return marca.stream().map(x -> new MarcaDTO(x)).toList();
    }

    public List<MarcaDTO> findByNomeDto(String nome){
        return marcaRepository.findByNomeMarcaDto(nome);
    }

    /**
     * Exclui uma marca do sistema com base no seu ID.
     *
     * @param id O ID da marca a ser excluída.
     * @return Uma resposta ResponseEntity com uma mensagem de sucesso e status HTTP 200 (OK).
     */
    public ResponseEntity<SmsResponse> deleteMarca(Long id){
        marcaRepository.deleteById(id);
        smsResponse.setMessage("Marca deletada com sucesso.");
        return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.OK);
    }

    /**
     * Valida os campos da marca antes de realizar operações de registro ou atualização.
     *
     * @param marca A marca a ser validada.
     * @return Uma resposta ResponseEntity com uma mensagem de erro ou nulo se a validação for bem-sucedida.
     */
    private ResponseEntity<?> validateFields(MarcaModel marca){

        if(marca.getNome().equals("")){
            smsResponse.setMessage("O campo 'Nome' é obrigatório");
        }

        return null;
    }
}
