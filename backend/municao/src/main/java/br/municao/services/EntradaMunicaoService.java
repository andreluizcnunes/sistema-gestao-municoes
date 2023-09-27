package br.municao.services;

import br.municao.models.EntradaMunicaoModel;
import br.municao.models.MunicaoModel;
import br.municao.repositories.EntradaMunicaoRepository;
import br.municao.repositories.MunicaoRepository;
import br.municao.response.SmsResponse;
import org.springframework.stereotype.Service;

@Service
public class EntradaMunicaoService {

    private final EntradaMunicaoRepository entradaMunicaoRepository;
    private final MunicaoRepository municaoRepository;

    SmsResponse smsResponse;
    public EntradaMunicaoService(EntradaMunicaoRepository entradaMunicaoRepository, MunicaoRepository municaoRepository){
        this.entradaMunicaoRepository = entradaMunicaoRepository;
        this.municaoRepository = municaoRepository;
        smsResponse = new SmsResponse();
    }

    public void newEntradaMunicao(EntradaMunicaoModel newEntrada){
        // Supondo que você tenha um critério para identificar a munição, como um ID único.
        MunicaoModel municao = municaoRepository.findById(newEntrada.getMunicao().getId()).orElse(new MunicaoModel()); // Obtém o objeto MunicaoModel existente ou cria um novo.

        long quantidadeAtual = municao.getQuantidade();
        long quantidadeNova = newEntrada.getQuantidade();

        long total = quantidadeAtual + quantidadeNova;

        municao.setQuantidade(total);
        entradaMunicaoRepository.save(newEntrada);
    }


}
