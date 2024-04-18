package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.master.Streams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StreamsRepository extends JpaRepository<Streams, Long> {
}
