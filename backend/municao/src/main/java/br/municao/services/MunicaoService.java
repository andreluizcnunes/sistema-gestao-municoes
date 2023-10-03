package br.municao.services;

import br.municao.dto.MunicaoDTO;
import br.municao.models.MunicaoModel;
import br.municao.repositories.MunicaoRepository;
import br.municao.response.SmsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class MunicaoService {

    @Autowired
    MunicaoRepository municaoRepository;

    SmsResponse smsResponse;

    public MunicaoService(MunicaoRepository municaoRepository){
        this.municaoRepository = municaoRepository;
        this.smsResponse = new SmsResponse();
    }

    public ResponseEntity<?> registerMunicao(MunicaoModel newMunicao){

        ResponseEntity<?> validationResponse = validateFields(newMunicao);
        if(validationResponse != null){
            return validationResponse;
        }

        return new ResponseEntity<MunicaoModel>(municaoRepository.save(newMunicao), HttpStatus.CREATED);
    }

    public ResponseEntity<?> updateMunicao(MunicaoModel newMunicao){

        ResponseEntity<?> validationResponse = validateFields(newMunicao);
        if(validationResponse != null){
            return validationResponse;
        }

        return new ResponseEntity<MunicaoModel>(municaoRepository.save(newMunicao), HttpStatus.CREATED);
    }

    public List<MunicaoDTO> getAllMunicaoDTO(){
        List<MunicaoModel> municao = municaoRepository.findAll();
        return municao.stream().map(x -> new MunicaoDTO(x)).toList();
    }

    public List<MunicaoModel> getAllMunicao(){
       return municaoRepository.findAll();

    }

    public List<MunicaoDTO> getMunicaoByname(String nome){
        return municaoRepository.findByNomeMunicaoDto(nome);
    }

    public long countTotal(){
        return municaoRepository.countTotalItems();
    }

    public long estoqueBaixoS(){
        return municaoRepository.countMunicoesComQuantidadeMenorQue1000();
    }

    public long estoqueBaixoS3000(){
        return municaoRepository.countMunicoesComQuantidadeMenorQue3000();
    }

    public ResponseEntity<SmsResponse> deleteMunicao(Long id){
        municaoRepository.deleteById(id);
        smsResponse.setMessage("Munição deletada com sucesso.");
        return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.OK);
    }

    private ResponseEntity<?> validateFields(MunicaoModel municao) {

        if (municao.getNome().equals("")){
            // Define uma mensagem de erro
            smsResponse.setMessage("O campo 'Nome' é obrigatório");
            // Retorna uma resposta com status de erro
            return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.BAD_REQUEST);

        } else if (municao.getCalibre().equals("")) {
            // Verifica se o Calibre do usuário está vazio
            // Define uma mensagem de erro
            smsResponse.setMessage("O campo 'Calibre' é obrigatório");
            // Retorna uma resposta com status de erro
            return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.BAD_REQUEST);

        }
        return null; // Retorna null em caso de sucesso na validação
    }
}
