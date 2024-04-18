package com.xebia.trainingManagement.model.master;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.xebia.trainingManagement.model.transition.PhaseMappingTechnology;
import com.xebia.trainingManagement.model.transition.Training;
import com.xebia.trainingManagement.model.transition.TrainingPhase;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "m_technology")
public class Technology {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;
    private String description;

    @Column(name = "created_on")
    private LocalDateTime createdOn;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_on")
    private LocalDateTime updatedOn;

    @Column(name = "updated_by")
    private String updatedBy;

    private Boolean active;

}
