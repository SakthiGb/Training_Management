package com.xebia.trainingManagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalException {
    @ExceptionHandler(value = InvalidCredential.class)
    public ResponseEntity<String> invalidException(){
        return new ResponseEntity<>("you don't have an access", HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(value = SomthingWentWrong.class)
    public  ResponseEntity<String> SomethingWentWrong(){
        return new ResponseEntity<>("No data Found",HttpStatus.BAD_REQUEST);
    }
}
