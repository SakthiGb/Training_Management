package com.xebia.trainingManagement.controller;


import com.xebia.trainingManagement.model.transition.Training;
import com.xebia.trainingManagement.model.transition.TrainingPhase;
import com.xebia.trainingManagement.service.ITrainingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class TrainingController {
    @Autowired
    ITrainingServices iTrainingServices;

    @GetMapping("/getTraining")
    private List<Training> getAllTraining()throws RuntimeException{
        return iTrainingServices.getAllTraining();
    }

    @PostMapping("/postTraining")
    private List<Training> saveTraining(@RequestBody Training Training)throws RuntimeException{
        return iTrainingServices.saveTraining(Training);
    }

    @DeleteMapping("/deleteTraining/{id}")
    private List<Training> deleteTraining(@PathVariable Long id)throws RuntimeException{
        return iTrainingServices.deleteById(id);
    }


}
