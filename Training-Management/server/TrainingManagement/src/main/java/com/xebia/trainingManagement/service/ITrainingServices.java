package com.xebia.trainingManagement.service;

import com.xebia.trainingManagement.model.transition.Training;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ITrainingServices {

    List<Training> getAllTraining();

    List<Training> saveTraining(Training training);

    List<Training> deleteById(Long id);
}
