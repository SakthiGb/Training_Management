package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.master.Year;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface YearRepository extends JpaRepository<Year,Long> {
}
