package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.transition.Trainees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TraineesRepository extends JpaRepository<Trainees, Long> {
}
