package br.municao.dto;

import br.municao.models.UserModel;
import lombok.Getter;

@Getter
public class UserDTO {
    private String nome;
    private String email;

    public UserDTO(UserModel user){
        nome = user.getNome();
        email = user.getEmail();
    }
}
