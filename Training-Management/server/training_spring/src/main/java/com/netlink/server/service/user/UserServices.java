package com.netlink.server.service.user;




import com.netlink.server.model.authentication.Passwd;
//import com.netlink.server.model.user.Userdata;
import com.netlink.server.model.user.Role;
import com.netlink.server.model.user.Userdata;
import com.netlink.server.repository.RepositoryInterface;
import com.netlink.server.repository.Role_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Properties;

@Service
public class UserServices implements IUserServices {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private RepositoryInterface repositoryInterface;
    @Autowired
    private Role_repo roleRepo;

    @Value("${spring.mail.username}")
    private String sender;
    @Value("${spring.mail.host}")
    private String host;
    @Value("${spring.mail.password}")
    private String password;



    @Override
    public ResponseEntity<String> sendOtp(Userdata userdata) {
        int min=111110, max=999999,random;  //variable declaration and initialization

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", "25");


        // get session object
        Session session =Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(sender,password);
            };
        });
        Userdata user;
        if(userdata.getEmail().equals("")||userdata.getEmail()==null){
            return new ResponseEntity<String>("Error while Sending Mail", HttpStatus.BAD_REQUEST) ;
        }else{
            user= repositoryInterface.findByEmail(userdata.getEmail());
        }



        // Try block to check for exceptions
        try {
            random=(int)(Math.random()*(max-min+1)+min);

            // set otp to user table
            user.setOtp(random);
            user.setConfirmotp(false);
            repositoryInterface.save(user);


            // Creating a simple mail message
//            SimpleMailMessage mailMessage = new SimpleMailMessage();
            Message mailMessage=new MimeMessage(session);


            // Setting up necessary details
            mailMessage.setFrom(new InternetAddress(sender));
//            mailMessage.setTo(userdata.getUsername());
            mailMessage.setRecipients(Message.RecipientType.TO,InternetAddress.parse(user.getEmail()));

            mailMessage.setContent(
                    "<h4>Hi " +
                            user.getFname() +" "+ user.getLname()+
                            "</h4>" +
                            "<span style='font-weight: 600;'>Please find your One Time Password (OTP) below:</span>" +
                            "<h2 style='text-align:center ;'>" +
                            "<span style='padding:10px;color:aliceblue;background-color: blue;border-radius: 5px;'>" +
                            random +
                            "</span></h2>",
                    "text/html");

            mailMessage.setSubject("DEMO PROJECT Email OTP");
        // Sending the mail
            Transport.send(mailMessage);


//            return new ResponseEntity<String>("Mail Sent Successfully...", HttpStatus.OK) ;
            return ResponseEntity.ok().build();
        }

        // Catch block to handle the exceptions
        catch (Exception e) {
            return new ResponseEntity<String>("Error while Sending Mail", HttpStatus.BAD_REQUEST) ;
        }
    }

    @Override
    public ResponseEntity<String> confirmOtp(Userdata user) {
        Userdata byEmail = repositoryInterface.findByEmail(user.getEmail());
        if(user.getOtp().equals(byEmail.getOtp())){
            byEmail.setConfirmotp(true);
            repositoryInterface.save(byEmail);
            return ResponseEntity.ok().build();
        }else {
            throw new RuntimeException("Invalid Otp");
        }

    }

    @Override
    public ResponseEntity<String> changepasswd(Passwd passwd) {
        Userdata byEmail = repositoryInterface.findByEmail(passwd.getEmail());
        if(passwd.getPassword()==null || passwd.getPassword().equals("")){
            return new ResponseEntity<String>("Password is Invalid ", HttpStatus.BAD_REQUEST) ;
        }else{
           if(byEmail.getConfirmotp()){
               if(byEmail.getPassword().equals(passwd.getPassword())){
                   return new ResponseEntity<String>("Error the Password is already used ", HttpStatus.BAD_REQUEST) ;
               }
               else {
                   byEmail.setPassword(passwd.getPassword());
                   repositoryInterface.save(byEmail);
//                   return new ResponseEntity<String>("Password has been changed Successfully...", HttpStatus.OK) ;
                   return ResponseEntity.ok().build();
               }
           }
           else {
               return new ResponseEntity<String>("Something went wrong please try again", HttpStatus.BAD_REQUEST) ;
           }

        }
    }

    ////////////////////////////////////////////////////////////////////////////////////


    @Override
    public List<Userdata> getAll() {
        List<Userdata> all = repositoryInterface.findAll();
        for (Userdata a: all ) {
            a.setPassword("");
        }
        return all;
    }

    @Override
    public Userdata getByEmail(String email) {
        Userdata byUsername = repositoryInterface.findByUsername(email);
        byUsername.setPassword("");
        return byUsername;
    }

    @Override
    public List<Role> getRole() {
        return roleRepo.findAll();
    }

    @Override
    public ResponseEntity<String> saveuser(Userdata userdata) {
        Userdata byEmail;
        if(userdata==null){
            return new ResponseEntity<>("Null data inserted, ERROR",HttpStatus.BAD_REQUEST);
        }else {
             byEmail = repositoryInterface.findByEmail(userdata.getEmail());

            String a=userdata.getPhone().toString();

            if(byEmail==null){
                userdata.setPassword(userdata.getFname().toLowerCase()+"@"+a.substring(a.length()-4));
                userdata.setUsername(userdata.getEmail());
                repositoryInterface.save(userdata);
                this.emailForSentPasswd(userdata.getFname()+" "+userdata.getLname(),userdata.getUsername(),userdata.getPassword());
            }else {
                byEmail.setFname(userdata.getFname());
                byEmail.setLname(userdata.getLname());
                byEmail.setPhone(userdata.getPhone());
                byEmail.setEmail(userdata.getEmail());
                byEmail.setRole(userdata.getRole());
                byEmail.setActive(userdata.getActive());
                repositoryInterface.save(byEmail);
            }
            return ResponseEntity.ok().build();
        }
    }


//    @Autowired
//    AccessManagementRepo accessManagementRepo;
//    @Autowired
//    RolePermissionRepo rolePermissionRepo;

    @Override
    public ResponseEntity<String> postRole(Role role) {
        Role role1 = new Role();
        if(role.getId()==null){
            role1.setActive(role.getActive());
            role1.setName(role.getName());
            role1.setDescription(role.getDescription());

//            rolePermissionRepo.save(role.getRolePermission());
//            role1.setRolePermission(role.getRolePermission());
//
//            role1.setAccessManagement(role.getAccessManagement());
            roleRepo.save(role);

        }
        else{
            Role byId = roleRepo.findById(role.getId()).get();
            byId.setActive(role.getActive());
            byId.setName(role.getName());

//            RolePermission rolePermission = rolePermissionRepo.findById(role.getRolePermission().getId()).get();
//            rolePermissionRepo.save(role.getRolePermission());
//            byId.setRolePermission(role.getRolePermission());

            byId.setDescription(role.getDescription());
//            byId.setAccessManagement(role.getAccessManagement());
            roleRepo.save(byId);

        }
        return ResponseEntity.ok().build();



    }


/////////////////////////////////////////////////////////////////////

    public ResponseEntity<String> emailForSentPasswd(String name,String username ,String passwd) {

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", "25");


        // get session object
        Session session =Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(sender,password);
            };
        });
//        Userdata user;
//        if(userdata.getEmail().equals("")||userdata.getEmail()==null){
//            return new ResponseEntity<String>("Error while Sending Mail", HttpStatus.BAD_REQUEST) ;
//        }else{
//            user= repositoryInterface.findByEmail(userdata.getEmail());
//        }



        // Try block to check for exceptions
        try {
            // Creating a simple mail message

            Message mailMessage=new MimeMessage(session);


            // Setting up necessary details
            mailMessage.setFrom(new InternetAddress(sender));
//            mailMessage.setTo(userdata.getUsername());
            mailMessage.setRecipients(Message.RecipientType.TO,InternetAddress.parse(username));

            mailMessage.setContent(
                    "<h4>Hi " +
                            name +" "+
                            "</h4>" +
                            "<h5 style='font-weight: 600;'>Username:"+username +"</h5>" +
                            "<h5 style='font-weight: 600;'>"+passwd +
                            "</h5>",
                    "text/html");

            mailMessage.setSubject("DEMO PROJECT Email OTP");
            // Sending the mail
            Transport.send(mailMessage);


//            return new ResponseEntity<String>("Mail Sent Successfully...", HttpStatus.OK) ;
            return ResponseEntity.ok().build();
        }

        // Catch block to handle the exceptions
        catch (Exception e) {
            return new ResponseEntity<String>("Error while Sending Mail", HttpStatus.BAD_REQUEST) ;
        }
    }


}



