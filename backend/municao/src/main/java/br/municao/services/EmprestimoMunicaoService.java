package br.municao.services;

import br.municao.dto.EmprestimoDTO;
import br.municao.dto.MunicaoDTO;
import br.municao.models.EmprestimoMunicaoModel;
import br.municao.models.EntradaMunicaoModel;
import br.municao.models.MunicaoModel;
import br.municao.repositories.EmprestimoMunicaoRepository;
import br.municao.repositories.MunicaoRepository;
import br.municao.response.SmsResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmprestimoMunicaoService {

    private final EmprestimoMunicaoRepository emprestimoMunicaoRepository;

    private final MunicaoRepository municaoRepository;

    private final SmsResponse smsResponse;

    public EmprestimoMunicaoService(EmprestimoMunicaoRepository emprestimoMunicaoRepository, MunicaoRepository municaoRepository){
        this.emprestimoMunicaoRepository = emprestimoMunicaoRepository;
        this.municaoRepository = municaoRepository;
        this.smsResponse = new SmsResponse();
    }

    public void emprestar(EmprestimoMunicaoModel emprestimo){
        // Supondo que você tenha um critério para identificar a munição, como um ID único.
        MunicaoModel municao = municaoRepository.findById(emprestimo.getMunicao().getId()).orElse(new MunicaoModel()); // Obtém o objeto MunicaoModel existente ou cria um novo.

        long quantidadeAtual = municao.getQuantidade();
        long quantidadeNova = emprestimo.getQuantidade();

        long total = quantidadeAtual - quantidadeNova;

        municao.setQuantidade(total);
        emprestimoMunicaoRepository.save(emprestimo);
    }

    public List<EmprestimoDTO> getAllEmprestimoDTO(){
        List<EmprestimoMunicaoModel> emprestimo = emprestimoMunicaoRepository.findAll();
        return emprestimo.stream().map(x -> new EmprestimoDTO(x)).toList();

    }
}
