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

@Service
public class MarcaService {

    @Autowired
    MarcaRepository marcaRepository;

    public SmsResponse smsResponse;

    public MarcaService(MarcaRepository marcaRepository){
        this.marcaRepository = marcaRepository;
        this.smsResponse = new SmsResponse();
    }

    public ResponseEntity<?> registerMarca(MarcaModel newMarca){

        ResponseEntity<?> validationResponse = validateFields(newMarca);
        if(validationResponse != null){
            return validationResponse;
        }

        return new ResponseEntity<MarcaModel>(marcaRepository.save(newMarca), HttpStatus.CREATED);
    }

    public ResponseEntity<?> updateMarca(MarcaModel marca){

        ResponseEntity<?> validationResponse = validateFields(marca);
        if(validationResponse != null){
            return validationResponse;
        }

        return new ResponseEntity<MarcaModel>(marcaRepository.save(marca), HttpStatus.OK);
    }

    public List<MarcaDTO> getAllMarca(){
        List<MarcaModel> marca = marcaRepository.findAll();
        return marca.stream().map(x -> new MarcaDTO(x)).toList();
    }

    public ResponseEntity<SmsResponse> deleteMarca(Long id){
        marcaRepository.deleteById(id);
        smsResponse.setMessage("Marca deletada com sucesso.");
        return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.OK);
    }

    private ResponseEntity<?> validateFields(MarcaModel marca){

        if(marca.getNome().equals("")){
            smsResponse.setMessage("O campo 'Nome' é obrigatório");
        }

        return null;
    }
}
