package br.municao.dto;

import br.municao.models.UserModel;
import lombok.Getter;

@Getter
public class UserCredentialsDTO {

    private String email;
    private String senha;

    public UserCredentialsDTO() {
        // Construtor sem argumentos
    }

    public UserCredentialsDTO(UserModel user){
        this.email = user.getEmail();
        this.senha = user.getSenha();
    }


}
