package com.xebia.trainingManagement.service;

import com.xebia.trainingManagement.model.transition.DetailPlan;
import com.xebia.trainingManagement.model.transition.Training;
import com.xebia.trainingManagement.model.transition.TrainingPhase;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IPhaseService {
    Training deletePhase(Long id);

    Training savePhase(Long id, TrainingPhase trainingPhase);

    Training getPhaseByTrainingId(Long id);

    TrainingPhase getPhaseById(Long id);

    TrainingPhase deleteDetailPlaneById(Long id);

    TrainingPhase saveDetailPlan(DetailPlan detailPlan);
}
