package com.netlink.server.controller;

import com.netlink.server.model.authentication.Passwd;
import com.netlink.server.model.authentication.RequestClass;
import com.netlink.server.model.authentication.ResponceClass;
import com.netlink.server.model.user.Userdata;
import com.netlink.server.service.user.IUserServices;
import com.netlink.server.service.authentication.ServiceJWT;
import com.netlink.server.utility.UtilityClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {
    @Autowired
    private UtilityClass utilityClass;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private ServiceJWT serviceJWT;


    @GetMapping("/")
    public String home() {
        return"Welcome";
    }

    @PostMapping("/authenticate")
    public ResponceClass authenticate(@RequestBody RequestClass requestClass) throws Exception{

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            requestClass.getUsername(),
                            requestClass.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }

        final UserDetails userDetails
                = serviceJWT.loadUserByUsername(requestClass.getUsername());

        final String token =
                utilityClass.generateToken(userDetails);

        return  new ResponceClass(token);
    }

////////////////////////////////// LOGIN AND FORGET //////////////////////////////////////////////
    @Autowired
    private IUserServices iservices;

    @PostMapping("/sentOtp")
    public ResponseEntity<String> sendingOtp(@RequestBody Userdata userdata){
        return iservices.sendOtp(userdata);
    }
    @PostMapping("/confirm")
    public ResponseEntity<String> confirmOtp(@RequestBody Userdata user){
        return iservices.confirmOtp(user);
    }
    @PostMapping("/changePasswd")
    public ResponseEntity<String> changePasswd(@RequestBody Passwd passwd){
        return iservices.changepasswd(passwd);
    }








}
