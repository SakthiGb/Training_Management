package com.xebia.trainingManagement.service;

import com.xebia.trainingManagement.model.master.Technology;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ITechnologyServices {
    List<Technology> getAllTech();

    List<Technology> saveTechnology(Technology technology);

    List<Technology> deleteById(Long id);
}
