package com.netlink.server.model.authentication;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Passwd {
    private String email;
    private String password;
    private Integer otp;
}
