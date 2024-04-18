package com.netlink.server.service.authentication;



import com.netlink.server.model.user.Userdata;
import com.netlink.server.repository.RepositoryInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service
public class ServiceJWT implements UserDetailsService {

    @Autowired
    RepositoryInterface repositoryInterface;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {


        Userdata byUsername = repositoryInterface.findByUsername(username);

        if(byUsername!=null){
            return new User(byUsername.getUsername(), byUsername.getPassword(), new ArrayList<>());
        }
        throw new UsernameNotFoundException("User Not Fund");


    }


}
