package br.municao.services;

import br.municao.repositories.EmprestimoMunicaoRepository;
import br.municao.response.SmsResponse;
import org.springframework.stereotype.Service;

@Service
public class EmprestimoMunicaoService {

    private final EmprestimoMunicaoRepository emprestimoMunicaoRepository;

    private final SmsResponse smsResponse;

    public EmprestimoMunicaoService(EmprestimoMunicaoRepository emprestimoMunicaoRepository){
        this.emprestimoMunicaoRepository = emprestimoMunicaoRepository;
        this.smsResponse = new SmsResponse();
    }
}
