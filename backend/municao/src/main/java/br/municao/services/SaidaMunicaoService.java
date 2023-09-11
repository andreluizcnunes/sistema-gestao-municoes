package br.municao.services;

import br.municao.repositories.SaidaMunicaoRepository;
import br.municao.response.SmsResponse;
import org.springframework.stereotype.Service;

@Service
public class SaidaMunicaoService {

    private final SaidaMunicaoRepository saidaMunicaoRepository;
    private final SmsResponse smsResponse;

    public SaidaMunicaoService(SaidaMunicaoRepository saidaMunicaoRepository){
        this.saidaMunicaoRepository = saidaMunicaoRepository;
        this.smsResponse = new SmsResponse();
    }
}
