package com.xebia.trainingManagement.model.transition;

import com.xebia.trainingManagement.model.master.Level;
import com.xebia.trainingManagement.model.master.Technology;
import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "t_phase_mapping")
public class PhaseMappingTechnology {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne
    @JoinColumn(name = "technology_id")
    private Technology technology;

    @OneToOne
    @JoinColumn(name = "level_id")
    private Level levelId;

    private Boolean active;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "phase_id",referencedColumnName = "id")
    private TrainingPhase trainingPhase;

}
