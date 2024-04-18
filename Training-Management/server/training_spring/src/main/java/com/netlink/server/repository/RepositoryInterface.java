package com.netlink.server.repository;


import com.netlink.server.model.user.Userdata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryInterface extends JpaRepository<Userdata, Long> {
    Userdata findByEmail(String email);
    Userdata findByUsername(String username);
}
