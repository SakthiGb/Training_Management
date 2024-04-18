package com.netlink.server.exception;

public class SomthingWentWrong extends RuntimeException{
    public SomthingWentWrong(String message){
        super(message);
    }
}
