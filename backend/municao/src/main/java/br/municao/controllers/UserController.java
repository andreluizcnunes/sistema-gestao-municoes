package br.municao.controllers;

import br.municao.dto.UserCredentialsDTO;
import br.municao.dto.UserDTO;
import br.municao.models.UserModel;
import br.municao.response.SmsResponse;
import br.municao.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/lista")
    public List<UserDTO> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/consultar")
    public List<UserDTO> getUsuarioByNomeDto(@RequestParam(name = "nome") String nome){
        return userService.findByUsuarioNameDto(nome);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> registerNewUser(@RequestBody UserModel newUser){
        return userService.registerUser(newUser);
    }

    @PutMapping("/editar")
    public ResponseEntity<?> updateUser(@RequestBody UserModel user){
        return userService.updateUser(user);
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<SmsResponse> deleteUser(@PathVariable Long id){
        return userService.deleteUser(id);
    }

    @PostMapping("/login")
    public ResponseEntity<String> validateEmailAndSenha(@RequestBody UserCredentialsDTO userCredentialsDTO){
        String email = userCredentialsDTO.getEmail();
        String senha = userCredentialsDTO.getSenha();

        UserModel userModel = userService.validate(email, senha);

        if(userModel != null){
            return  ResponseEntity.ok("usuario Autenticado");
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario ou senha estão invalidos");
        }
    }
}
