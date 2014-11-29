package dk.topee.panis.business.login.boundary;

import dk.topee.panis.business.login.entity.AccessElement;
import dk.topee.panis.business.login.entity.LoginElement;
import dk.topee.panis.business.login.entity.UserCredential;
import dk.topee.panis.business.login.entity.UserGroup;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.UUID;

@Stateless
public class LoginServiceBean {

    @PersistenceContext
    EntityManager em;

    public AccessElement login(LoginElement loginElement) {
        TypedQuery<UserCredential> ucQuery = em.createNamedQuery(UserCredential.BY_NAME_AND_PASSWORD, UserCredential.class);
        ucQuery.setParameter("username", loginElement.getEmail());
        ucQuery.setParameter("password", loginElement.getPassword());
        UserCredential userCredentials = ucQuery.getSingleResult();
        TypedQuery<UserGroup> ugQuery = em.createNamedQuery(UserGroup.BY_USERNAME, UserGroup.class);
        ugQuery.setParameter("username", userCredentials.getUsername());
        List<UserGroup> userGroups = ugQuery.getResultList();
        AccessElement accessElement = new AccessElement();
        accessElement.setAccessId(userGroups.get(0).getUsername());
        accessElement.setAccessToken(UUID.randomUUID().toString());
        accessElement.setAccessPermission(userGroups.get(0).getGroupname());
        return accessElement;
    }
}
