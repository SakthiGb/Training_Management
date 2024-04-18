package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.master.StreamType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StreamTypeRepository extends JpaRepository<StreamType, Long> {
}
