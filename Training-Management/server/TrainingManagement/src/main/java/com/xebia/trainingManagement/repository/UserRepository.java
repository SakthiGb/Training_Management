package com.xebia.trainingManagement.repository;

import com.xebia.trainingManagement.model.transition.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {
}
