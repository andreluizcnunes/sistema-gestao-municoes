package br.municao.services;

import br.municao.dto.UserDTO;
import br.municao.models.UserModel;
import br.municao.repositories.UserRepository;
import br.municao.response.SmsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Esta classe fornece serviços relacionados a usuários.
 */
@Service
public class UserService {

    @Autowired
    public UserRepository usersRepository;

    public SmsResponse smsResponse;

    /**
     * Construtor da classe UserService.
     *
     * @param usersRepository O repositório de usuários a ser injetado.
     */
    public UserService(UserRepository usersRepository){

        this.usersRepository = usersRepository;
        this.smsResponse = new SmsResponse();// Inicializa smsResponse
    }

    /**
     * Registra um novo usuário.
     *
     * @param user O usuário a ser registrado.
     * @return Uma ResponseEntity com status HTTP e uma mensagem de resposta.
     */
    public ResponseEntity<?> registerUser(UserModel user){

        // Realiza a validação dos campos
        ResponseEntity<?> validationResponse = validateFields(user);
        if (validationResponse != null) {
            return validationResponse; // Retorna a resposta de validação em caso de erro
        }

        // Caso todas as informações estejam preenchidas, salva o usuário e retorna uma resposta de sucesso
        return new ResponseEntity<UserModel>(usersRepository.save(user), HttpStatus.CREATED);
    }

    /**
     * Atualiza um usuário existente.
     *
     * @param user O usuário com informações atualizadas.
     * @return Uma ResponseEntity com status HTTP e uma mensagem de resposta.
     */
    public ResponseEntity<?> updateUser(UserModel user){

        // Realiza a validação dos campos
        ResponseEntity<?> validationResponse = validateFields(user);
        if (validationResponse != null) {
            return validationResponse; // Retorna a resposta de validação em caso de erro
        }

        // Caso todas as informações estejam preenchidas, atualiza o usuário e retorna uma resposta de sucesso
        return new ResponseEntity<UserModel>(usersRepository.save(user), HttpStatus.OK);
    }

    /**
     * Obtém todos os usuários cadastrados.
     *
     * @return Uma lista de DTOs de usuário.
     */
    public List<UserDTO> getAllUsers(){
        // Busca todos os usuários no banco de dados
        List<UserModel> user = usersRepository.findAll();
        // Converte os modelos de usuário em DTOs de usuário e retorna a lista
        return user.stream().map(x -> new UserDTO(x)).toList();
    }

    public List<UserDTO> findByUsuarioNameDto(String nome){
        return usersRepository.findByUsuarioNameDto(nome);
    }

    public UserModel validate(String email, String senha){
        return usersRepository.findByEmailAndSenha(email, senha);
    }

    /**
     * Exclui um usuário com base no ID fornecido.
     *
     * @param id O ID do usuário a ser excluído.
     * @return Uma ResponseEntity com status HTTP e uma mensagem de resposta.
     */
    public ResponseEntity<SmsResponse> deleteUser(Long id){
        // Exclui o usuário com base no ID fornecido
        usersRepository.deleteById(id);
        // Define uma mensagem de sucesso
        smsResponse.setMessage("Usuario Deletado com sucesso.");
        // Retorna uma resposta com status de sucesso
        return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.OK);
    }


    /**
     * Método privado para validar os campos do usuário.
     *
     * @param user O usuário a ser validado.
     * @return Uma ResponseEntity com status HTTP e uma mensagem de erro em caso de validação falha, ou null em caso de sucesso.
     */
    private ResponseEntity<?> validateFields(UserModel user) {

        if (user.getNome().equals("")){
            // Define uma mensagem de erro
            smsResponse.setMessage("O nome é obrigatório");
            // Retorna uma resposta com status de erro
            return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.BAD_REQUEST);

        } else if (user.getEmail().equals("")) {
            // Verifica se o email do usuário está vazio
            // Define uma mensagem de erro
            smsResponse.setMessage("O email é obrigatório");
            // Retorna uma resposta com status de erro
            return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.BAD_REQUEST);

        } else if (user.getSenha().equals("")) {
            // Verifica se a senha do usuário está vazia
            // Define uma mensagem de erro
            smsResponse.setMessage(("A senha é obrigatória"));
            // Retorna uma resposta com status de erro
            return new ResponseEntity<SmsResponse>(smsResponse, HttpStatus.BAD_REQUEST);
        }
        return null; // Retorna null em caso de sucesso na validação
    }


}
