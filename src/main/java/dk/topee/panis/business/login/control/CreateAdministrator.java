package dk.topee.panis.business.login.control;

import dk.topee.panis.business.login.entity.UserCredentials;
import dk.topee.panis.business.login.entity.UserGroups;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.logging.Logger;

@Startup
@Singleton
public class CreateAdministrator {

    private static final Logger log = Logger.getLogger(CreateAdministrator.class.getName());

    @PersistenceContext
    EntityManager em;

    @PostConstruct
    private void startup() {
        log.info("Creating the Panis administrator");
        UserCredentials userCredentials = new UserCredentials();
        userCredentials.setUsername("admin");
        userCredentials.setPassword("secret");
        em.persist(userCredentials);
        UserGroups userGroups = new UserGroups();
        userGroups.setUsername("admin");
        userGroups.setGroupname("administrators");
        em.persist(userGroups);
    }
}
