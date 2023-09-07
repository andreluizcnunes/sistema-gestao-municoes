package br.municao.response;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

/**
 * A classe SmsResponse representa a resposta de um serviço de envio de SMS.
 * Ela encapsula informações relacionadas à mensagem de SMS.
 */
@Component
@Getter
@Setter
public class SmsResponse {
    /**
     * A mensagem de texto que será enviada via SMS.
     */
    private String message;
}
