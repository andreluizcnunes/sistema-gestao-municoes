package br.municao.dto;

import br.municao.models.UserModel;
import lombok.Getter;

@Getter
public class UserDTO {
    private String nome;
    private String email;
    private String senha;

    public UserDTO(UserModel user){
        nome = user.getNome();
        email = user.getEmail();
        senha = user.getSenha();
    }
}
