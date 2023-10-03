package br.municao.services;

import br.municao.models.EntradaMunicaoModel;
import br.municao.models.MunicaoModel;
import br.municao.models.SaidaMunicaoModel;
import br.municao.repositories.MunicaoRepository;
import br.municao.repositories.SaidaMunicaoRepository;
import br.municao.response.SmsResponse;
import org.springframework.stereotype.Service;

@Service
public class SaidaMunicaoService {

    private final SaidaMunicaoRepository saidaMunicaoRepository;
    private final MunicaoRepository municaoRepository;
    private final SmsResponse smsResponse;

    public SaidaMunicaoService(SaidaMunicaoRepository saidaMunicaoRepository, MunicaoRepository municaoRepository){
        this.saidaMunicaoRepository = saidaMunicaoRepository;
        this.municaoRepository = municaoRepository;
        this.smsResponse = new SmsResponse();
    }

    public void saidaEstoqueMunicao(SaidaMunicaoModel newSaida){
        // Supondo que você tenha um critério para identificar a munição, como um ID único.
        MunicaoModel municao = municaoRepository.findById(newSaida.getMunicao().getId()).orElse(new MunicaoModel()); // Obtém o objeto MunicaoModel existente ou cria um novo.

        long quantidadeAtual = municao.getQuantidade();
        long quantidadeNova = newSaida.getQuantidade();

        long total = quantidadeAtual - quantidadeNova;

        municao.setQuantidade(total);
        saidaMunicaoRepository.save(newSaida);
    }

    public long countTotal(){
        return saidaMunicaoRepository.countTotalItems();
    }
}
