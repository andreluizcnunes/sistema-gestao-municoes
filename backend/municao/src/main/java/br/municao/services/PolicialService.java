package br.municao.services;

import br.municao.dto.PolicialDTO;
import br.municao.models.FornecedorModel;
import br.municao.models.PolicialModel;
import br.municao.repositories.PolicialRepository;
import br.municao.response.SmsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PolicialService {

    @Autowired
    PolicialRepository policialRepository;
    SmsResponse  smsResponse;

    public PolicialService(PolicialRepository policialRepository){
        this.policialRepository = policialRepository;
        this.smsResponse = new SmsResponse();
    }

    public ResponseEntity<?> registerPolicial(PolicialModel newPolicial){

        ResponseEntity<?> validationResponse = validateFields(newPolicial);
        if(validationResponse != null){
            return validationResponse;
        }

        return new ResponseEntity<PolicialModel>(policialRepository.save(newPolicial), HttpStatus.CREATED);
    }

    public ResponseEntity<?> updatePolicial(PolicialModel policial){

        ResponseEntity<?> validationResponse = validateFields(policial);
        if(validationResponse != null){
            return validationResponse;
        }

        return new ResponseEntity<PolicialModel>(policialRepository.save(policial), HttpStatus.OK);
    }

    public List<PolicialDTO> getAllPolicialDTO(){
        List<PolicialModel> policial = policialRepository.findAll();
        return policial.stream().map(x -> new PolicialDTO(x)).toList();
    }

    public List<PolicialModel> getAllPolicial(){
        return policialRepository.findAll();
    }

    public List<PolicialDTO> getByPolicialForname(String nome){
        return policialRepository.findByNome(nome);
    }

    private ResponseEntity<?> validateFields(PolicialModel policial) {

        if (policial.getNome().equals("")){
            // Define uma mensagem de erro
            smsResponse.setMessage("O campo 'Nome' é obrigatório");
            // Retorna uma resposta com status de erro
            return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.BAD_REQUEST);

        } else if (policial.getCpf().equals("")) {
            // Verifica se o CPF do usuário está vazio
            // Define uma mensagem de erro
            smsResponse.setMessage("O campo 'CPF' é obrigatório");
            // Retorna uma resposta com status de erro
            return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.BAD_REQUEST);

        }else if (policial.getDataNascimento().equals("")) {
            // Verifica se a Data Nascimento do usuário está vazio
            // Define uma mensagem de erro
            smsResponse.setMessage("O campo 'Data Nascimento' é obrigatório");
            // Retorna uma resposta com status de erro
            return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.BAD_REQUEST);
        }
        return null; // Retorna null em caso de sucesso na validação
    }
}
