package dk.topee.panis.business.registration.boundary;

import dk.topee.panis.business.registration.entity.MyTestEntity;

import javax.ejb.Stateless;
import java.util.ArrayList;
import java.util.List;

@Stateless
public class RegistrationServiceBean {

    List<MyTestEntity> myTestEntities = new ArrayList<>();

    public RegistrationServiceBean() {
        MyTestEntity myTestEntity1 = new MyTestEntity();
        myTestEntity1.setEmail("andersand@andeby.dk");
        myTestEntity1.setInitials("aaa");
        myTestEntity1.setUsername("Anders And");
        myTestEntities.add(myTestEntity1);
        MyTestEntity myTestEntity2 = new MyTestEntity();
        myTestEntity2.setEmail("onkeljoakim@andeby.dk");
        myTestEntity2.setInitials("oja");
        myTestEntity2.setUsername("Onkel Joakim Von And");
        myTestEntities.add(myTestEntity2);
    }

    public List<MyTestEntity> getAllUsers() {
        return myTestEntities;
    }

    public void addUser(MyTestEntity myTestEntity) {
        myTestEntities.add(myTestEntity);
    }
}
