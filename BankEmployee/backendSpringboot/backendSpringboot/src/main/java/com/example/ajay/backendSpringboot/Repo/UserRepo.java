package com.example.ajay.backendSpringboot.Repo;

import com.example.ajay.backendSpringboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long>{
}
