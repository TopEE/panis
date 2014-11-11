package dk.topee.panis.business.registration.entity;

import dk.topee.test.JPABaseTest;
import dk.topee.test.UnitOfWork;
import org.junit.Test;

import javax.persistence.TypedQuery;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class MyTestEntityIT extends JPABaseTest {

    @Test
    public void validateORMappings() {
        final MyTestEntity myTestEntity = new MyTestEntity();
        myTestEntity.setEmail("feb@topdanmark.dk");
        myTestEntity.setInitials("feb");
        myTestEntity.setUsername("Flemming");
        myTestEntity.setPassword("password");
        perform(new UnitOfWork() {
            @Override
            public void work() {
                em.persist(myTestEntity);
                assertNotNull(myTestEntity.getId());
            }
        });
    }

    @Test
    public void anotherORMappingTest() {
        perform(new UnitOfWork() {
            @Override
            public void work() {
                MyTestEntity myTestEntity = new MyTestEntity();
                myTestEntity.setEmail("svx@topdanmark.dk");
                myTestEntity.setInitials("svx");
                myTestEntity.setUsername("Søren");
                myTestEntity.setPassword("password");
                em.merge(myTestEntity);
            }
        });

        perform(new UnitOfWork() {
            @Override
            public void work() {
                TypedQuery<MyTestEntity> query = this.em.createQuery("select mte from MyTestEntity mte where mte.initials = 'svx'", MyTestEntity.class);
                List<MyTestEntity> resultList = query.getResultList();
                assertEquals("Søren", resultList.get(0).getUsername());
            }
        });
    }
}
