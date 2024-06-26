CREATE SCHEMA IF NOT EXISTS master;

CREATE TABLE master.m_user (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   user_id VARCHAR(255),
   name VARCHAR(255),
   email VARCHAR(255),
   dob TIMESTAMP WITHOUT TIME ZONE,
   doj TIMESTAMP WITHOUT TIME ZONE,
   created_on TIMESTAMP WITHOUT TIME ZONE,
   created_by VARCHAR(255),
   updated_on TIMESTAMP WITHOUT TIME ZONE,
   updated_by VARCHAR(255),
   active BOOLEAN,
   CONSTRAINT pk_m_user PRIMARY KEY (id)
);

CREATE TABLE master.m_trainees (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   user_id BIGINT,
   name VARCHAR(255),
   email VARCHAR(255),
   created_on TIMESTAMP WITHOUT TIME ZONE,
   created_by VARCHAR(255),
   updated_on TIMESTAMP WITHOUT TIME ZONE,
   updated_by VARCHAR(255),
   active BOOLEAN,
   CONSTRAINT pk_m_trainees PRIMARY KEY (id),
   CONSTRAINT fk_m_trainees_user_id FOREIGN KEY (user_id) REFERENCES master.m_user (id)

);

CREATE TABLE master.m_trainers (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   user_id BIGINT,
   name VARCHAR(255),
   email VARCHAR(255),
   created_on TIMESTAMP WITHOUT TIME ZONE,
   created_by VARCHAR(255),
   updated_on TIMESTAMP WITHOUT TIME ZONE,
   updated_by VARCHAR(255),
   active BOOLEAN,
   CONSTRAINT pk_m_trainers PRIMARY KEY (id),
   CONSTRAINT fk_m_trainers_user_id FOREIGN KEY (user_id) REFERENCES master.m_user (id)

);


CREATE TABLE master.m_training_year (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   name VARCHAR(255),
   created_on TIMESTAMP WITHOUT TIME ZONE,
   created_by VARCHAR(255),
   updated_on TIMESTAMP WITHOUT TIME ZONE,
   updated_by VARCHAR(255),
   active BOOLEAN,
   CONSTRAINT pk_m_training_year PRIMARY KEY (id)
);


CREATE TABLE master.m_training_streams (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   name VARCHAR(255),
   created_on TIMESTAMP WITHOUT TIME ZONE,
   created_by VARCHAR(255),
   updated_on TIMESTAMP WITHOUT TIME ZONE,
   updated_by VARCHAR(255),
   active BOOLEAN,
   CONSTRAINT pk_m_training_streams PRIMARY KEY (id)
);
CREATE TABLE master.m_stream_type (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   name VARCHAR(255),
   created_on TIMESTAMP WITHOUT TIME ZONE,
   created_by VARCHAR(255),
   updated_on TIMESTAMP WITHOUT TIME ZONE,
   updated_by VARCHAR(255),
   active BOOLEAN,
   CONSTRAINT pk_m_stream_type PRIMARY KEY (id)
);



CREATE TABLE master.t_training (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   name VARCHAR(255),
   streams_id BIGINT,
   stream_type_id BIGINT,
   description VARCHAR(255),
   duration VARCHAR(255),
   status VARCHAR(255),
   created_on TIMESTAMP WITHOUT TIME ZONE,
   created_by VARCHAR(255),
   updated_on TIMESTAMP WITHOUT TIME ZONE,
   updated_by VARCHAR(255),
   active BOOLEAN,
   CONSTRAINT pk_t_training PRIMARY KEY (id),
   CONSTRAINT fk_t_training_streams_id FOREIGN KEY (streams_id) REFERENCES master.m_training_streams (id),
   CONSTRAINT fk_t_training_streams_type_id FOREIGN KEY (stream_type_id) REFERENCES master.m_stream_type (id)

);


CREATE TABLE master.t_training_phase (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   training_id BIGINT,
   name VARCHAR(255),
   duration VARCHAR(255),
   CONSTRAINT pk_t_training_phase PRIMARY KEY (id),
   CONSTRAINT fk_t_training_phase_training_id FOREIGN KEY (training_id) REFERENCES master.t_training (id)

);
CREATE TABLE master.m_technology (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   name VARCHAR(255),
   description VARCHAR(255),
   active BOOLEAN,
   phase_id BIGINT,
   CONSTRAINT pk_m_technology PRIMARY KEY (id),
   CONSTRAINT fk_m_technology_phase_id FOREIGN KEY (phase_id) REFERENCES master.t_training_phase (id)

);

CREATE TABLE master.t_training_batches (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   user_id VARCHAR(255),
   name VARCHAR(255),
   year_id BIGINT,
   stream_id BIGINT,
   stream_type_id BIGINT,
   start_date TIMESTAMP WITHOUT TIME ZONE,
   end_date TIMESTAMP WITHOUT TIME ZONE,
   active BOOLEAN,
   CONSTRAINT pk_t_training_batches PRIMARY KEY (id),
   CONSTRAINT fk_pk_t_training_batches_stream_id FOREIGN KEY (stream_id) REFERENCES master.m_training_streams (id),
   CONSTRAINT fk_pk_t_training_batches_stream_type_id FOREIGN KEY (stream_type_id) REFERENCES master.m_stream_type (id),
   CONSTRAINT fk_pk_t_training_batches_year_id FOREIGN KEY (year_id) REFERENCES master.m_training_year (id)

);
CREATE TABLE master.t_trainees_mapping (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   user_id VARCHAR(255),
   trainee_id BIGINT,
   batch_id BIGINT,
   name VARCHAR(255),
   created_on TIMESTAMP WITHOUT TIME ZONE,
   created_by VARCHAR(255),
   updated_on TIMESTAMP WITHOUT TIME ZONE,
   updated_by VARCHAR(255),
   active BOOLEAN,
   CONSTRAINT pk_t_trainees_mapping PRIMARY KEY (id),
   CONSTRAINT fk_t_trainees_mapping_batch_id FOREIGN KEY (batch_id) REFERENCES master.t_training_batches (id),
   CONSTRAINT fk_t_trainees_mapping_trainee_id FOREIGN KEY (trainee_id) REFERENCES master.m_trainees (id)

);

CREATE TABLE master.t_trainers_mapping (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   user_id VARCHAR(255),
   trainer_id BIGINT,
   batch_id BIGINT,
   name VARCHAR(255),
   created_on TIMESTAMP WITHOUT TIME ZONE,
   created_by VARCHAR(255),
   updated_on TIMESTAMP WITHOUT TIME ZONE,
   updated_by VARCHAR(255),
   active BOOLEAN,
   CONSTRAINT pk_t_trainers_mapping PRIMARY KEY (id),
   CONSTRAINT fk_t_trainers_mapping_batch_id FOREIGN KEY (batch_id) REFERENCES master.t_training_batches (id),
   CONSTRAINT fk_t_trainers_mapping_trainer_id FOREIGN KEY (trainer_id) REFERENCES master.m_trainers (id)


);

