import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TrainconfigService } from '../share/trainconfig.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-training-configuration',
  templateUrl: './training-configuration.component.html',
  styleUrls: ['./training-configuration.component.scss']
})
export class TrainingConfigurationComponent implements OnInit {
  searchtext: any;
  gridApiActive: any;

  router: any;


  constructor(
    private share: TrainconfigService,
    private dash: DashboardComponent, private location: Location
  ) {
    this.dash.name = { "names": "" }
  }

  ngOnInit(): void {
    this.dash.trainingConfiguration();

    this.matchComp = this.share.setMsg();

    if (this.matchComp != 'mastertraining') {
      this.title = 'Training'
      this.trainingColor = '#6a1b58'
      this.tc = "#fff"
      this.technologyColor = ''
      this.streamColor = ''
      this.training = true
      this.technology = false
      this.streams = false
    }
    else {
      this.title = 'Streams'
      this.trainingColor = '#f0f0f0'
      this.technologyColor = '#f0f0f0'
      this.streamColor = '#6a1b58'
      this.training = false
      this.technology = false
      this.streams = true
    }
  }

  matchComp = 'training'
  title = ''
  trainingColor = ''
  technologyColor = ''
  streamColor = ''
  tc = ""
  tr = ""
  sc = ""
  training!: boolean
  technology!: boolean
  streams!: boolean

  training_fun() {
    this.title = 'Training '
    this.trainingColor = '#6a1b58'
    this.technologyColor = '#f0f0f0'
    this.streamColor = '#f0f0f0'
    this.tc = "#fff"
    this.tr = "#2F3130"
    this.sc = "#2F3130"
    this.training = true
    this.technology = false
    this.streams = false

  }
  technology_fun() {
    this.title = 'Technology '
    this.trainingColor = '#f0f0f0'
    this.technologyColor = '#6a1b58'
    this.streamColor = '#f0f0f0'
    this.tc = "#2F3130"
    this.tr = "#fff"
    this.sc = "#2F3130"
    this.training = false
    this.technology = true
    this.streams = false
  }

  stream_fun() {
    this.title = 'Streams'
    this.trainingColor = '#f0f0f0'
    this.technologyColor = '#f0f0f0'
    this.streamColor = '#6a1b58'
    this.tc = "#2F3130"
    this.tr = "#2F3130"
    this.sc = "#fff"
    this.training = false
    this.technology = false
    this.streams = true
  }

 
 
};


