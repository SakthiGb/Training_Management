package com.xebia.trainingManagement.service;

import com.xebia.trainingManagement.model.master.StreamType;
import com.xebia.trainingManagement.model.master.Streams;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IStreamService {
    List<Streams> getAll();

    List<Streams> saveStream(Streams streams);

    List<Streams> deleteStream(Long id);

    List<StreamType> getStreamType();
}
