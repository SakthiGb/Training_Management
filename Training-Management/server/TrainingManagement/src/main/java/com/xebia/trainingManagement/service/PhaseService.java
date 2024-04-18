package com.xebia.trainingManagement.service;

import com.xebia.trainingManagement.exception.SomthingWentWrong;
import com.xebia.trainingManagement.model.master.Level;
import com.xebia.trainingManagement.model.master.Technology;
import com.xebia.trainingManagement.model.transition.*;
import com.xebia.trainingManagement.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PhaseService implements IPhaseService{
    @Autowired
    TrainingPhaseRepository phaseRepository;


    @Autowired
    DetailPlanRepository detailPlanRepository;

    @Autowired
    PhaseMappingRepository phaseMappingRepository;

    @Autowired
    TrainingRepository trainingRepository;

    @Autowired
    TrainingServices trainingServices;

    @Autowired
    private LevelRepository levelRepository;
    @Autowired
    private TechnologyRepository technologyRepository;


    @Override
    public Training deletePhase(Long id) throws RuntimeException{
        TrainingPhase trainingPhase;
        Long trainingId;
        if(this.isPresent(id)){

            trainingPhase = phaseRepository.findById(id).get();
            trainingId=trainingPhase.getTraining().getId();

//  removing foreign key in phase Detail
            if(!trainingPhase.getDetailPlanList().isEmpty()){
                List<DetailPlan> detailPlanList = trainingPhase.getDetailPlanList();
                for (DetailPlan detailPlan:detailPlanList ) {
                    detailPlan.setTrainingPhase(null);
                    DetailPlan save = detailPlanRepository.save((detailPlan));
                    detailPlanRepository.deleteById(save.getId());
                    System.out.println(save.getId()+"detail plane is deleted");
                }

                System.out.println("detail deleted");
            }


//  removing foreign key in phase technology mapping
           if (!trainingPhase.getTechnologyList().isEmpty()) {
               List<PhaseMappingTechnology> technologyList = trainingPhase.getTechnologyList();

               for (PhaseMappingTechnology phaseMappingTechnology:technologyList ) {
                   phaseMappingTechnology.setTrainingPhase(null);
                   phaseMappingTechnology.setLevelId(null);
                   phaseMappingTechnology.setLevelId(null);
                   PhaseMappingTechnology save = phaseMappingRepository.save((phaseMappingTechnology));
                   phaseMappingRepository.deleteById(save.getId());
                   System.out.println(save.getId()+"technology is deleted");
               }
               System.out.println("technology deleted");

           }



           phaseRepository.deleteById(trainingPhase.getId());




        }else {
            throw new SomthingWentWrong("No Data Found");
        }
        return trainingRepository.findById(trainingId).get();
//        return null;
    }

    @Override
    public Training savePhase(Long id, TrainingPhase trainingPhase) throws RuntimeException{
        if(trainingServices.isPresent(id)){

            Training training = trainingRepository.findById(id).get();
            trainingPhase.setTraining(training);
            TrainingPhase save = phaseRepository.save(trainingPhase);

            for (PhaseMappingTechnology mappingTechnology:   trainingPhase.getTechnologyList())
            {
                Optional<Level> byId = levelRepository.findById(mappingTechnology.getLevelId().getId());
                byId.ifPresent(mappingTechnology::setLevelId);

                Optional<Technology> byId1 = technologyRepository.findById(mappingTechnology.getTechnology().getId());
                byId1.ifPresent(mappingTechnology::setTechnology);


                mappingTechnology.setTrainingPhase(save);
                phaseMappingRepository.save(mappingTechnology);
            }

            for (DetailPlan detailPlan:   trainingPhase.getDetailPlanList())
            {
                detailPlan.setTrainingPhase(save);
                detailPlanRepository.save(detailPlan);
            }


        }else throw new SomthingWentWrong("Invalid Data Format");

        return trainingRepository.findById(id).get();
    }

    @Override
    public Training getPhaseByTrainingId(Long id) throws RuntimeException{
        if(trainingServices.isPresent(id)){
            return trainingRepository.findById(id).get();
        }
        else throw new SomthingWentWrong("Invalid Data Format");
    }

    @Override
    public TrainingPhase getPhaseById(Long id) throws RuntimeException{

        if(isPresent(id)){
            return phaseRepository.findById(id).get();
        }else throw new SomthingWentWrong("No Data Found");

    }

    @Override
    public TrainingPhase deleteDetailPlaneById(Long id) throws RuntimeException{
        Long id1 = detailPlanRepository.findById(id).get().getTrainingPhase().getId();
        detailPlanRepository.deleteById(id);
        return phaseRepository.findById(id1).get();
    }

    @Override
    public TrainingPhase saveDetailPlan(DetailPlan detailPlan) throws RuntimeException{
        TrainingPhase trainingPhase = phaseRepository.findById(detailPlan.getTrainingPhase().getId()).get();
        detailPlan.setTrainingPhase(trainingPhase);
        DetailPlan save = detailPlanRepository.save(detailPlan);

        return phaseRepository.findById(detailPlan.getTrainingPhase().getId()).get();
    }


    private Boolean isPresent(Long id){
        return phaseRepository.findById(id).isPresent();
    }
}
