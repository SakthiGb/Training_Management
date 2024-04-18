package com.netlink.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@ComponentScan(basePackages = {"com.userAuth.JWT.*","com.netlink.*"})
@EnableJpaRepositories(basePackages = {"com.userAuth.JWT.repository","com.netlink.server.repository"})
@EntityScan(basePackages = {"com.userAuth.JWT.model","com.netlink.server.model"})



@SpringBootApplication
public class TrainingSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrainingSpringApplication.class, args);
	}

	@Bean
	public PasswordEncoder passwordEncoder(){
		return NoOpPasswordEncoder.getInstance();
	}
}
