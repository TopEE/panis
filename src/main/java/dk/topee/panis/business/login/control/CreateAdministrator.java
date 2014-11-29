package dk.topee.panis.business.login.control;

import dk.topee.panis.business.login.entity.UserCredential;
import dk.topee.panis.business.login.entity.UserGroup;

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
        UserCredential userCredentials = new UserCredential();
        userCredentials.setEmail("admin@topdanmark.dk");
        userCredentials.setPassword("secret");
        em.persist(userCredentials);
        UserGroup userGroups = new UserGroup();
        userGroups.setUsername("admin");
        userGroups.setGroupname("administrators");
        em.persist(userGroups);
    }
}
