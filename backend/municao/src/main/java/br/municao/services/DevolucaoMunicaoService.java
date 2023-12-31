package br.municao.services;

import br.municao.models.DevolucaoMunicaoPolicalModel;
import br.municao.models.MunicaoModel;
import br.municao.repositories.DevolucaoMunicaoRepository;
import br.municao.repositories.MunicaoRepository;
import br.municao.response.SmsResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DevolucaoMunicaoService {

    private final DevolucaoMunicaoRepository devolucaoMunicaoRepository;

    private final MunicaoRepository municaoRepository;

    private final SmsResponse smsResponse;

    public DevolucaoMunicaoService(DevolucaoMunicaoRepository devolucaoMunicaoRepository, MunicaoRepository municaoRepository){
        this.devolucaoMunicaoRepository = devolucaoMunicaoRepository;
        this.municaoRepository = municaoRepository;
        this.smsResponse = new SmsResponse();
    }

    public void devolucao(DevolucaoMunicaoPolicalModel devolucao){
        // Supondo que você tenha um critério para identificar a munição, como um ID único.
        MunicaoModel municao = municaoRepository.findById(devolucao.getEmprestimoMunicao().getMunicao().getId()).orElse(new MunicaoModel()); // Obtém o objeto MunicaoModel existente ou cria um novo.

        long quantidadeAtual = municao.getQuantidade();
        long quantidadeNova = devolucao.getQuantidade();

        long total = quantidadeAtual + quantidadeNova;

        municao.setQuantidade(total);
        devolucaoMunicaoRepository.save(devolucao);
    }

    public List<DevolucaoMunicaoPolicalModel> listAllDevolucaoS(){
        return devolucaoMunicaoRepository.findAll();
    }
}
