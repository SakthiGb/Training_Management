package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.master.Technology;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechnologyRepository extends JpaRepository<Technology,Long> {

}
