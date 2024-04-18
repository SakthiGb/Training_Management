INSERT INTO master.m_user (id, name, email, created_on, updated_on, active) VALUES
  (1, 'demo', 'demo.123@netlink.com', NOW(), NOW(), TRUE);

INSERT INTO master.m_trainees (id,name, email, created_on, updated_on, active) VALUES
  (1,'Demo Trainee', 'trainee@demo.com', NOW(), NOW(), TRUE);

INSERT INTO master.m_trainers (id,name, email, created_on, updated_on, active) VALUES
  (1,'Demo Trainer', 'trainer@demo.com', NOW(), NOW(), TRUE);



INSERT INTO master.m_training_year (id,name, created_on, updated_on, active) VALUES
      (1,'2020', NOW(), NOW(), TRUE),
      (2,'2021', NOW(), NOW(), TRUE),
      (3,'2022', NOW(), NOW(), TRUE),
      (4,'2023', NOW(), NOW(), TRUE) ;

INSERT INTO master.m_training_streams (id,name, created_on, updated_on, active) VALUES
      (1,'Full Stack Java', NOW(), NOW(), TRUE),
      (2,'BA', NOW(), NOW(), TRUE),
      (3,'QC Automation', NOW(), NOW(), TRUE);

INSERT INTO master.m_stream_type (id,name, created_on, updated_on, active) VALUES
      (1,'Bootcamp', NOW(), NOW(), TRUE),
      (2,'Freshers', NOW(), NOW(), TRUE),
      (3,'Literals', NOW(), NOW(), TRUE);

--INSERT INTO master.m_trainees (id,name, email, created_on, updated_on, active) VALUES
--      (1,'Dhanshree', null, NOW(), NOW(), TRUE),
--      (2,'Shivani', null, NOW(), NOW(), TRUE),
--      (3,'Ayushi', null, NOW(), NOW(), TRUE),
--      (4,'Akshay', null, NOW(), NOW(), TRUE);

INSERT INTO master.t_training (id,name, streams_id, stream_type_id, description, duration, status, created_on, updated_on, active) VALUES
  (1,'Demo Training', 1, 1, 'demo purposes', '1 week', 'pending', NOW(), NOW(), TRUE);

INSERT INTO master.t_training_phase (id,training_id, name, duration) VALUES
  (1,1, 'demo phase', '2 days');

INSERT INTO master.m_technology (id,name, description, active, phase_id) VALUES
  (1,'JAVA', 'description ', TRUE, 1);


INSERT INTO master.t_training_batches (id,name, year_id, stream_id, stream_type_id, start_Date, end_Date, active) VALUES
  (1,'batch_1', 1, 1, 1, NOW(), NOW(), TRUE);

INSERT INTO master.t_trainees_mapping (id,trainee_id, batch_id, created_on, updated_on, active) VALUES
  (1,1, 1, NOW(), NOW(), TRUE);

INSERT INTO master.t_trainers_mapping (id,trainer_id, batch_id, created_on, updated_on, active) VALUES
  (1,1, 1, NOW(), NOW(), TRUE);




