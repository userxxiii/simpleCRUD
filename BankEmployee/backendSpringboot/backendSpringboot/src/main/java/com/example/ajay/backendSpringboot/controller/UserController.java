package com.example.ajay.backendSpringboot.controller;

import com.example.ajay.backendSpringboot.exception.UserNotFoundException;
import com.example.ajay.backendSpringboot.model.User;
import com.example.ajay.backendSpringboot.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin ("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepo userRepo;

    @PostMapping("/user")
    User newUser (@RequestBody User newUser){
        return userRepo.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/users/paged")
    public Page<User> getAllUsersPaged(@RequestParam(defaultValue = "0") Integer pageNo,
                                       @RequestParam(defaultValue = "10") Integer pageSize) {
        PageRequest pageable = PageRequest.of(pageNo, pageSize);
        return userRepo.findAll(pageable);
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepo.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return userRepo.findById(id)
                .map(user ->{

                    user.setName(newUser.getName());

                    user.setBirthday(newUser.getBirthday());
                    user.setBankBalance(newUser.getBankBalance());
                    user.setAge(newUser.getAge());
                    user.setWithdrawalLimit(newUser.getWithdrawalLimit());
                    user.setGender(newUser.getGender());
                    user.setIdno(newUser.getIdno());
                    user.setAccountType(newUser.getAccountType());
                    user.setOpenDate(newUser.getOpenDate());
                    user.setStatus(newUser.getStatus());
                    user.setEmail(newUser.getEmail());

                    return userRepo.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));

    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepo.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id);
        return "User with id" + id + " has been deleted";
    }


}