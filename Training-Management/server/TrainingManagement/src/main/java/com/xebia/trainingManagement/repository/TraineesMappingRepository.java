package com.xebia.trainingManagement.repository;


import com.xebia.trainingManagement.model.transition.TraineesMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TraineesMappingRepository extends JpaRepository<TraineesMapping, Long> {
}
