package com.xebia.trainingManagement.service;

import com.xebia.trainingManagement.exception.SomthingWentWrong;
import com.xebia.trainingManagement.model.master.Technology;
import com.xebia.trainingManagement.model.transition.PhaseMappingTechnology;
import com.xebia.trainingManagement.repository.PhaseMappingRepository;
import com.xebia.trainingManagement.repository.TechnologyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.Access;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class TechnologyServices implements ITechnologyServices{
    @Autowired
    TechnologyRepository technologyRepository;
    @Autowired
    private PhaseMappingRepository phaseMappingRepository;


    @Override
    public List<Technology> getAllTech() {
        return technologyRepository.findAll();
    }

    @Override
    public List<Technology> saveTechnology(Technology technology) throws RuntimeException{
        if(technology==null){
            throw new SomthingWentWrong("Invalid data format");
        }

        if (technology.getId()==null){
            technology.setUpdatedBy("Brajesh Maurya");
            technology.setCreatedBy("Brajesh Maurya");
            technology.setUpdatedOn(LocalDateTime.now());
            technology.setCreatedOn(LocalDateTime.now());
            technologyRepository.save(technology);
        }else {
            Technology technology1 = technologyRepository.findById(technology.getId()).get();
            technology1.setName(technology.getName());
            technology1.setActive(technology.getActive());
            technology1.setDescription(technology.getDescription());
            technology1.setUpdatedBy("Brajesh Maurya");
            technology1.setUpdatedOn(LocalDateTime.now());
            technologyRepository.save(technology1);
        }
        return technologyRepository.findAll();
    }

    @Override
    public List<Technology> deleteById(Long id) throws RuntimeException{
        if(this.isPresent(id)){

            Technology technology = technologyRepository.findById(id).get();

            List<PhaseMappingTechnology> all = phaseMappingRepository.findAll();

            for (PhaseMappingTechnology mappingTechnology:all) {
                if(mappingTechnology.getTechnology().getId()==id){
                    mappingTechnology.setTechnology(null);
                }
            }
            phaseMappingRepository.saveAll(all);


            technologyRepository.deleteById(id);
        }else {
            throw new SomthingWentWrong("No Data Found");
        }
        return technologyRepository.findAll();
    }

    private Boolean isPresent(Long id){
        return technologyRepository.findById(id).isPresent();
    }


}
