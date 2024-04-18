package com.netlink.server.repository;

import com.netlink.server.model.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Role_repo extends JpaRepository<Role, Long> {
}
