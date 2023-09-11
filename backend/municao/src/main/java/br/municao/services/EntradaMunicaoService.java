package br.municao.services;

import br.municao.models.EntradaMunicaoModel;
import br.municao.models.MunicaoModel;
import br.municao.repositories.EntradaMunicaoRepository;
import br.municao.repositories.MunicaoRepository;
import br.municao.response.SmsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
        MunicaoModel municao = newEntrada.getMunicao();
        long quantidadeAtual = municao.getQuantidade();
        long quantidadeNova = newEntrada.getQuantidade();

        municao.setQuantidade(quantidadeAtual + quantidadeNova);

        municaoRepository.save(municao);
    }
}
