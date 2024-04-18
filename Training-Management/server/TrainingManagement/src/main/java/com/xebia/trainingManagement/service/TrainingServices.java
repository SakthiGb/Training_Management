package com.xebia.trainingManagement.service;

import com.xebia.trainingManagement.exception.SomthingWentWrong;
import com.xebia.trainingManagement.model.master.StreamType;
import com.xebia.trainingManagement.model.master.Streams;
import com.xebia.trainingManagement.model.master.Technology;
import com.xebia.trainingManagement.model.transition.Training;
import com.xebia.trainingManagement.model.transition.TrainingPhase;
import com.xebia.trainingManagement.repository.StreamTypeRepository;
import com.xebia.trainingManagement.repository.StreamsRepository;
import com.xebia.trainingManagement.repository.TrainingPhaseRepository;
import com.xebia.trainingManagement.repository.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TrainingServices implements ITrainingServices{

    @Autowired
    TrainingRepository trainingRepository;

    @Autowired
    StreamsRepository streamsRepository;

    @Autowired
    StreamTypeRepository streamTypeRepository;

    @Autowired
    TrainingPhaseRepository trainingPhaseRepository;





    @Override
    public List<Training> getAllTraining() {
        return trainingRepository.findAll();
    }

    @Override
    public List<Training> saveTraining(Training training) throws RuntimeException{
       Training save=new Training();
        if(training==null){
            throw new SomthingWentWrong( "Invalid Data Format");
        }

        if (training.getId()==null){
            if(training.getStreams().getId()!=null){
                training.setStreams(streamsRepository.findById(training.getStreams().getId()).get());
            }
            if(training.getStreamType().getId()!=null){
                training.setStreamType(streamTypeRepository.findById(training.getStreamType().getId()).get());
            }
//            if(training.getTrainingPhase().getId()!=null){
//                training.setTrainingPhase(trainingPhaseRepository.findById(training.getTrainingPhase().getId()).get());
//            }

            training.setUpdatedBy("Brajesh Maurya");
            training.setCreatedBy("Brajesh Maurya");
            training.setUpdatedOn(LocalDateTime.now());
            training.setCreatedOn(LocalDateTime.now());
            save = trainingRepository.save(training);
        }else {
            Training training1 = trainingRepository.findById(training.getId()).get();
            if(training.getStreams().getId()!=null){
                training1.setStreams(streamsRepository.findById(training.getStreams().getId()).get());
            }
            if(training.getStreamType().getId()!=null){
                training1.setStreamType(streamTypeRepository.findById(training.getStreamType().getId()).get());
            }
            training1.setDuration(training.getDuration());
            training1.setName(training.getName());
            training1.setActive(training.getActive());
            training1.setDescription(training.getDescription());
            training1.setUpdatedBy("Brajesh Maurya");
            training1.setUpdatedOn(LocalDateTime.now());
            save=trainingRepository.save(training1);
        }

        if(training.getTrainingPhase()!=null){
            for (TrainingPhase trainingPhase : training.getTrainingPhase()) {
                TrainingPhase subscribe = new TrainingPhase();

                trainingPhase.setTraining(save);

                trainingPhaseRepository.save(trainingPhase);

            }
        }
        return trainingRepository.findAll();
    }

    @Override
    public List<Training> deleteById(Long id) {
        if(isPresent(id)){
            Training training = trainingRepository.findById(id).get();
            training.setStreams(null);
            training.setStreamType(null);
            for (TrainingPhase trainingPhase : training.getTrainingPhase()) {



                trainingPhaseRepository.deleteById(trainingPhase.getId());
            }
            trainingRepository.deleteById(id);

        }
        else throw new SomthingWentWrong("");

        return trainingRepository.findAll();
    }
    public Boolean isPresent(Long id){
        return trainingRepository.findById(id).isPresent();
    }



}

