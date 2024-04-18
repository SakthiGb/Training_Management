package com.netlink.server.exception;

public class UsernameOrPasswordIncorrect extends RuntimeException{
    public UsernameOrPasswordIncorrect(String message) {
        super(message);
    }
}
