package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.transition.DetailPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailPlanRepository extends JpaRepository<DetailPlan, Long> {
}
