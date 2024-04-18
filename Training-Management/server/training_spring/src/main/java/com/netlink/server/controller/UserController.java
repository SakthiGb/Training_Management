package com.netlink.server.controller;



import com.netlink.server.exception.InvalidCredential;
import com.netlink.server.model.user.Role;
import com.netlink.server.model.user.Userdata;
import com.netlink.server.service.user.IUserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    @Autowired
    private IUserServices iservices;

    @PostMapping("/getByEmail")
    public Userdata getByEmail(@RequestBody String email){
        return iservices.getByEmail(email);
    }
    @PostMapping("/getAll")
    public List<Userdata> getAll(@RequestBody String name){
//        return iservices.getAll();

//        if(role.equals("super admin")){
            return iservices.getAll();
//        }else throw new InvalidCredential("you don't have an access");
    }

    @PostMapping("/getRole")
    public List<Role> getRole(@RequestBody String name){

//        if(role.equals("super admin")){
            return iservices.getRole();
//        }else return null;
    }

    @PostMapping("/saveuser")
    public ResponseEntity<String> saveuser(@RequestBody Userdata userdata){
        return iservices.saveuser(userdata);
    }

    @PostMapping("/postRole")
    public ResponseEntity<String> postRole(@RequestBody Role role){
        return iservices.postRole(role);
    }


}
