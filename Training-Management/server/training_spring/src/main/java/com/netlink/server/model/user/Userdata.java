package com.netlink.server.model.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Userdata {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String nsid;
    private String username;
    private String password;
    private String fname;
    private String lname;
    private String email;
    private Long phone;

    @ManyToOne
    @JoinColumn(name = "department_id",referencedColumnName = "id")
    @JsonIgnoreProperties("userdataList")
    private Department department;


    @ManyToOne
    @JoinColumn(name = "designation_id",referencedColumnName = "id")
    @JsonIgnoreProperties("userdataList")
    private Designation designation;



    @ManyToOne
    @JoinColumn(name = "role_id",referencedColumnName = "id")
    @JsonIgnoreProperties("userdataList")
    private Role role;

    private Boolean active;
    private String profile;
    private Integer otp;
    private Boolean confirmotp;

}

