package com.netlink.server.config;


import com.netlink.server.filter.FilterClass;
import com.netlink.server.service.authentication.ServiceJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    ServiceJWT serviceJWT;

    @Autowired
    private FilterClass filterClass;


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        super.configure(auth);
        auth.userDetailsService(serviceJWT);
    }
    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf()
                .disable()
                .authorizeRequests()
                .antMatchers("/authenticate")
                .permitAll()
                .antMatchers("/sentOtp")
                .permitAll()
                .antMatchers("/changePasswd")
                .permitAll()
                .antMatchers("/confirm")
                .permitAll()
                .antMatchers("/getByEmail")
                .permitAll()
                .antMatchers("/getAll")
                .permitAll()
                .antMatchers("/getRole")
                .permitAll()
                .antMatchers("/saveuser")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(filterClass, UsernamePasswordAuthenticationFilter.class);

    }
}
