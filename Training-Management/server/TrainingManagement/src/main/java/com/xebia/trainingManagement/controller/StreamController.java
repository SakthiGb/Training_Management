package com.xebia.trainingManagement.controller;

import com.xebia.trainingManagement.model.master.StreamType;
import com.xebia.trainingManagement.model.master.Streams;
import com.xebia.trainingManagement.service.IStreamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class StreamController {
    @Autowired
    IStreamService iStreamService;

    @GetMapping("/getStreams" )
    private List<Streams> getStream()throws RuntimeException{
        return iStreamService.getAll();
    }

    @PostMapping("/postStream")
    private List<Streams> saveStream(@RequestBody Streams streams)throws RuntimeException{
        return iStreamService.saveStream(streams);
    }

    @DeleteMapping("/deleteStream/{id}")
    private List<Streams> deleteStream(@PathVariable Long id)throws RuntimeException{
        return iStreamService.deleteStream(id);
    }

    @GetMapping("/getStreamType")
    private List<StreamType> getStreamType()throws RuntimeException{
        return iStreamService.getStreamType();
    }
}
