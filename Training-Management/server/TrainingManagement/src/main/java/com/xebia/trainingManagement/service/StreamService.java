package com.xebia.trainingManagement.service;

import com.xebia.trainingManagement.exception.SomthingWentWrong;
import com.xebia.trainingManagement.model.master.StreamType;
import com.xebia.trainingManagement.model.master.Streams;
import com.xebia.trainingManagement.repository.StreamTypeRepository;
import com.xebia.trainingManagement.repository.StreamsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class StreamService implements IStreamService{

    @Autowired
    StreamsRepository streamsRepository;

    @Autowired
    StreamTypeRepository streamTypeRepository;

    @Override
    public List<Streams> getAll() {
        return streamsRepository.findAll();
    }

    @Override
    public List<Streams> saveStream(Streams streams) throws RuntimeException{
        if (streams!=null ){

            if(streams.getId()!=null){
                Streams referenceById = streamsRepository.findById(streams.getId()).get();
                referenceById.setId(streams.getId());
                referenceById.setName(streams.getName());
                referenceById.setActive(streams.getActive());
                referenceById.setDescription(streams.getDescription());
                referenceById.setUpdatedOn(LocalDateTime.now());
                referenceById.setUpdatedBy("Brajesh Maurya");
                streamsRepository.save(referenceById);
            }else {
                streams.setCreatedOn(LocalDateTime.now());
                streams.setUpdatedOn(LocalDateTime.now());
                streams.setUpdatedBy("Brajesh Maurya");
                streams.setCreatedBy("Brajesh Maurya");
                streamsRepository.save(streams);
            }
            return streamsRepository.findAll();
        }else {
            throw new SomthingWentWrong("Invalid Data format ");
        }
    }

    @Override
    public List<Streams> deleteStream(Long id) {
        if(this.isPresent(id)){
            streamsRepository.deleteById(id);
        }else throw new SomthingWentWrong("No Data Found");

        return streamsRepository.findAll();
    }

    @Override
    public List<StreamType> getStreamType() {
        return streamTypeRepository.findAll();
    }

    private Boolean isPresent(Long id){
        return streamsRepository.findById(id).isPresent();
    }

}
