package br.municao.services;

import br.municao.repositories.DevolucaoMunicaoRepository;
import br.municao.response.SmsResponse;
import org.springframework.stereotype.Service;

@Service
public class DevolucaoMunicaoService {

    private final DevolucaoMunicaoRepository devolucaoMunicaoRepository;

    private final SmsResponse smsResponse;

    public DevolucaoMunicaoService(DevolucaoMunicaoRepository devolucaoMunicaoRepository){
        this.devolucaoMunicaoRepository = devolucaoMunicaoRepository;
        this.smsResponse = new SmsResponse();
    }
}
