package dk.topee.panis.business.login.boundary;

import dk.topee.panis.business.login.entity.UserCredentials;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class LoginServiceBean {

    @PersistenceContext
    EntityManager em;

    public UserCredentials login() {
        System.out.println("LoginServiceBean.login");

        UserCredentials userCredentials = new UserCredentials();
        userCredentials.setEmail("test@test.dk");
        userCredentials.setPassword("test");

        em.persist(userCredentials);

        UserCredentials userCredentials1 = em.find(UserCredentials.class, 1);
        return userCredentials1;

    }
}
