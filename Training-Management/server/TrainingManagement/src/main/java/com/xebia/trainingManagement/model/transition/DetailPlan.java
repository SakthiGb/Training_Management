package com.xebia.trainingManagement.model.transition;

import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "t_training_detail_plan")
public class DetailPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private Long day;
    private String topic;

    @Column(name = "topic_hrs")
    private String topicHrs;

    private String Assessment;

    @Column(name="assessment_hrs")
    private String assessmentHrs;

    private String practice;

    @Column(name = "practice_hrs")
    private String practiceHrs;

    private String project;

    @Column(name = "project_hrs")
    private String projectHrs;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "phase_id",referencedColumnName = "id")
    private TrainingPhase trainingPhase;

    private Boolean isActive;


}
