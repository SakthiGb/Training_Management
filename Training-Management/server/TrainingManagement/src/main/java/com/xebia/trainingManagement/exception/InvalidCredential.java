package com.xebia.trainingManagement.exception;

public class InvalidCredential extends RuntimeException{
    public InvalidCredential(String message) {
        super(message);
    }
}
