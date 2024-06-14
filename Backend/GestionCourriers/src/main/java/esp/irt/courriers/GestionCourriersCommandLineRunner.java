package esp.irt.courriers;

import java.util.Collections;
import java.util.Optional;


import org.springframework.boot.CommandLineRunner;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import esp.irt.courriers.security.model.Role;
import esp.irt.courriers.security.model.UserEntity;
import esp.irt.courriers.security.repository.RoleRepository;
import esp.irt.courriers.security.repository.UserRepository;
import esp.irt.courriers.services.ExcelDataService;

@Component
public class GestionCourriersCommandLineRunner implements CommandLineRunner{

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private ExcelDataService excelDataService;
    private Environment environment;
    public GestionCourriersCommandLineRunner(UserRepository userRepository,RoleRepository roleRepository,Environment environment,PasswordEncoder passwordEncoder,ExcelDataService excelDataService){
        super();
        this.roleRepository=roleRepository;
        this.userRepository=userRepository;
        this.passwordEncoder=passwordEncoder;
        this.excelDataService=excelDataService;
        this.environment=environment ;
    }

   @Override
public void run(String... args) throws Exception {
    // TODO Auto-generated method stub
    if(userRepository.count() == 0 && roleRepository.count() == 0) {
        
        Role role = new Role("ADMIN");
        Role role2 = new Role("USERBD");
        
        roleRepository.save(role);
        roleRepository.save(role2);
        
        UserEntity userEntity = new UserEntity();
        userEntity.setUsername("memine");
        userEntity.setPassword(passwordEncoder.encode("36202464"));
        
        UserEntity userEntity2 = new UserEntity();
        userEntity2.setUsername("admin");
        userEntity2.setPassword(passwordEncoder.encode("1234"));
        
        UserEntity userEntity3 = new UserEntity();
        userEntity3.setUsername("abdallahi");
        userEntity3.setPassword(passwordEncoder.encode("34887831"));

        Optional<Role> roles = roleRepository.findById(1L);
        
        if(roles.isPresent()) {
            userEntity.setRoles(Collections.singletonList(roles.get()));
            userEntity2.setRoles(Collections.singletonList(roles.get()));
            userEntity3.setRoles(Collections.singletonList(roles.get()));
        }

        userRepository.save(userEntity);
        userRepository.save(userEntity2);
        userRepository.save(userEntity3);
    }
    // String uploadDir = environment.getProperty("cabinet.path");
    // System.out.println(uploadDir);
    // excelDataService.importDataFromExcel(uploadDir);
}}

