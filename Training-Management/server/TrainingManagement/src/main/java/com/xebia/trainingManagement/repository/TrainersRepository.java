package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.transition.Trainers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainersRepository extends JpaRepository<Trainers,Long> {
}
