package com.netlink.server.model.user;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.netlink.server.model.user.permission.Configuration;
import com.netlink.server.model.user.permission.Permission_management;
import com.netlink.server.model.user.permission.Role_management;
import com.netlink.server.model.user.permission.User_management;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;
    private String description;
    private Boolean active;
    private LocalDateTime updated_on;
    private String updated_by;

//    @OneToOne
//    @JoinColumn(name = "permission_id",referencedColumnName = "id")
//    @JsonIgnoreProperties("roleList")
//    private RolePermission rolePermission;
//
//    @ManyToOne
//    @JoinColumn(name = "access_management_id",referencedColumnName = "id")
//    @JsonIgnoreProperties("roleList")
//    private AccessManagement accessManagement;
//

    @ManyToOne
    @JoinColumn(name = "configuration_id",referencedColumnName = "id")
    @JsonIgnoreProperties("roleList")
    private Configuration configuration;

    @ManyToOne
    @JoinColumn(name = "user_management_id",referencedColumnName = "id")
    @JsonIgnoreProperties("roleList")
    private User_management user_management;

    @ManyToOne
    @JoinColumn(name = "permission_management_id",referencedColumnName = "id")
    @JsonIgnoreProperties("roleList")
    private Permission_management permission_management;

    @ManyToOne
    @JoinColumn(name = "role_management_id",referencedColumnName = "id")
    @JsonIgnoreProperties("roleList")
    private Role_management role_management;


    @OneToMany(mappedBy = "role")
    private List<Userdata> userdataList;
}
