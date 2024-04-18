package com.xebia.trainingManagement.controller;

import com.xebia.trainingManagement.model.transition.DetailPlan;
import com.xebia.trainingManagement.model.transition.Training;
import com.xebia.trainingManagement.model.transition.TrainingPhase;
import com.xebia.trainingManagement.service.IPhaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class PhaseController {
    @Autowired
    IPhaseService iPhaseService;

    @GetMapping("/getPhaseByTrainingId/{id}")
    private Training getPhaseByTrainingId(@PathVariable Long id) throws RuntimeException{
        return iPhaseService.getPhaseByTrainingId(id);
    }

    @DeleteMapping("/deleteByPhaseId/{id}")
    private Training deletePhase(@PathVariable Long id)throws RuntimeException{
        return iPhaseService.deletePhase(id);
    }

    @PostMapping("/savePhaseByTrainingId/{id}")
    private Training savePhase(@PathVariable Long id, @RequestBody TrainingPhase trainingPhase)throws RuntimeException{
        return iPhaseService.savePhase(id,trainingPhase);
    }

    @GetMapping("/getPhaseById/{id}")
    private TrainingPhase getPhaseById(@PathVariable Long id)throws RuntimeException{
        return iPhaseService.getPhaseById(id);
    }

    @DeleteMapping("/deleteDetailPlanById/{id}")
    private TrainingPhase deleteDetailPlaneById(@PathVariable Long id) throws RuntimeException{
        return iPhaseService.deleteDetailPlaneById(id);
    }

    @PostMapping("/saveDetailPlan")
    private TrainingPhase saveDetailPlan(@RequestBody DetailPlan detailPlan)throws RuntimeException{
        return iPhaseService.saveDetailPlan(detailPlan);
    }


}
