package br.municao.dto;

import br.municao.models.UserModel;
import lombok.Getter;

/**
 * A classe UserDTO é usada para transferir dados relacionados a um usuário (UserModel).
 * Ela encapsula informações de nome e email do usuário.
 */
@Getter
public class UserDTO {

    private Long id;

    /**
     * O nome do usuário.
     */
    private String nome;

    /**
     * O endereço de e-mail do usuário.
     */
    private String email;

    /**
     * Cria um novo UserDTO com base em um objeto UserModel.
     *
     * @param user O UserModel do qual os dados serão extraídos para criar o UserDTO.
     */
    public UserDTO(UserModel user){
        this.id = user.getId();
        this.nome = user.getNome();
        this.email = user.getEmail();
    }
}
