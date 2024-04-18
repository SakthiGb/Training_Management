package com.xebia.trainingManagement.model.transition;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.xebia.trainingManagement.model.master.StreamType;
import com.xebia.trainingManagement.model.master.Streams;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "t_training")
public class Training {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;

    @OneToOne(cascade = CascadeType.ALL,fetch= FetchType.EAGER)
    @JoinColumn(name = "streams_id",referencedColumnName = "id")
    private Streams streams;

    @OneToOne(cascade = CascadeType.ALL,fetch= FetchType.EAGER)
    @JoinColumn(name = "type_id",referencedColumnName = "id")
    private StreamType streamType;

    @OneToMany(mappedBy = "training")
    @JsonIgnoreProperties("training")
    private List<TrainingPhase> trainingPhase;

    private String description;
    private String duration;
    private String status;

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
