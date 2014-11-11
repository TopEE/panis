package dk.topee.test;

import junit.framework.Assert;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class PersistenceHelper {

    private static EntityManagerFactory instance;

    public static EntityManagerFactory getEntityManagerFactory() {
        if (instance == null) {
            try {
                instance = Persistence.createEntityManagerFactory("integration-test");
            } catch (Exception ex) {
                ex.printStackTrace();
                Assert.fail("Exception during JPA EntityManagerFactory creation.");
                throw new RuntimeException("Could not create EntityManagerFactory");
            }
        }
        return instance;
    }

}
