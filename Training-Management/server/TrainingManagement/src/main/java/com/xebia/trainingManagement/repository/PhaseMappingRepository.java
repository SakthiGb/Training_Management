package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.transition.PhaseMappingTechnology;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhaseMappingRepository extends JpaRepository<PhaseMappingTechnology,Long> {
    void deleteById(Long id);
}
