package dk.topee.panis.business.registration.boundary;

import dk.topee.panis.business.login.entity.UserCredentials;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Stateless
public class RegistrationServiceBean {

    @PersistenceContext
    EntityManager em;

    public List<UserCredentials> getAllUsers() {
        TypedQuery<UserCredentials> query = em.createQuery("from UserCredentials uc", UserCredentials.class);
        return query.getResultList();
    }

}
