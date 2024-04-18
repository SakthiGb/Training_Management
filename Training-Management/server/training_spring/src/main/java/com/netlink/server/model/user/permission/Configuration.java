package com.netlink.server.model.user.permission;

import com.netlink.server.model.user.Role;
import com.netlink.server.model.user.Userdata;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Configuration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private Boolean read;
    private Boolean add;
    private Boolean edit;
    private Boolean delete;

    @OneToMany(mappedBy = "configuration")
    private List<Role> roleList;
}
