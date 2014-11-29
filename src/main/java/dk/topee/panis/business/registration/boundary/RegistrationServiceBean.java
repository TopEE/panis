package dk.topee.panis.business.registration.boundary;

import dk.topee.panis.business.login.entity.UserCredential;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Stateless
public class RegistrationServiceBean {

    @PersistenceContext
    EntityManager em;

    public List<UserCredential> getAllUsers() {
        TypedQuery<UserCredential> query = em.createQuery("from UserCredentials uc", UserCredential.class);
        return query.getResultList();
    }

}
