package com.netlink.server.exception;

public class InvalidCredential extends RuntimeException{
    public InvalidCredential(String message) {
        super(message);
    }
}
