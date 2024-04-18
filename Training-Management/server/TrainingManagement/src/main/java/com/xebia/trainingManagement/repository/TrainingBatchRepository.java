package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.transition.TrainingBatches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingBatchRepository extends JpaRepository<TrainingBatches,Long> {
}
