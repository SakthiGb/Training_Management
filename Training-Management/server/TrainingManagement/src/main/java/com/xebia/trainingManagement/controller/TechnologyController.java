package com.xebia.trainingManagement.controller;

import com.xebia.trainingManagement.model.master.Technology;
import com.xebia.trainingManagement.service.ITechnologyServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class TechnologyController {

    @Autowired
    ITechnologyServices iTechnologyServices;

    @GetMapping("/getTechnology")
    private List<Technology> getAllTech()throws RuntimeException{
        return iTechnologyServices.getAllTech();
    }

    @PostMapping("/postTechnology")
    private List<Technology> saveTechnology(@RequestBody Technology technology)throws RuntimeException{
        return iTechnologyServices.saveTechnology(technology);
    }

    @DeleteMapping("/deleteTechnology/{id}")
    private List<Technology> deleteTechnology(@PathVariable Long id)throws RuntimeException{
        return iTechnologyServices.deleteById(id);
    }
}
