package com.xebia.trainingManagement.controller;

import com.xebia.trainingManagement.service.IUserService;
import com.xebia.trainingManagement.model.transition.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserController {
    @Autowired
    IUserService iUserService;

//
//    @GetMapping("/getAllUser")
//    public List<Users> getUser(){
//        return iUserService.getAllUser();
//    }
}
