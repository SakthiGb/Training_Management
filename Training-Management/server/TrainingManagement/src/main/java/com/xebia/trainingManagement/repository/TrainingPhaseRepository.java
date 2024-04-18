package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.transition.TrainingPhase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingPhaseRepository extends JpaRepository<TrainingPhase,Long> {
}
