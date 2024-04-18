package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.master.Level;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LevelRepository extends JpaRepository<Level, Long> {
}