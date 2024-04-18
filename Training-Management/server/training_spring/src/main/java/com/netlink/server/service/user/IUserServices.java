package com.netlink.server.service.user;


import com.netlink.server.model.authentication.Passwd;
import com.netlink.server.model.user.Role;
import com.netlink.server.model.user.Userdata;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IUserServices {

   ResponseEntity<String> sendOtp(Userdata mailId);

   ResponseEntity<String> changepasswd(Passwd passwd);

   ResponseEntity<String> confirmOtp(Userdata user);

   /////////////////////////////////////////////////////////////////////////////

   List<Userdata> getAll();

   Userdata getByEmail(String email);


   List<Role> getRole();

   ResponseEntity<String> saveuser(Userdata userdata);

    ResponseEntity<String> postRole(Role role);
}
