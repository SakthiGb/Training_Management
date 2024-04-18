package com.xebia.trainingManagement.repository;


import com.xebia.trainingManagement.model.transition.TrainersMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainerMappingRepository extends JpaRepository<TrainersMapping,Long> {
}
