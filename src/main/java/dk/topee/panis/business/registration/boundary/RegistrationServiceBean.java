package dk.topee.panis.business.registration.boundary;

import dk.topee.panis.business.registration.entity.User;

import javax.ejb.Stateless;
import java.util.ArrayList;
import java.util.List;

@Stateless
public class RegistrationServiceBean {

    List<User> users = new ArrayList<>();

    public RegistrationServiceBean() {
        User user1 = new User();
        user1.setEmail("andersand@andeby.dk");
        user1.setInitials("aaa");
        user1.setUsername("Anders And");
        users.add(user1);
        User user2 = new User();
        user2.setEmail("onkeljoakim@andeby.dk");
        user2.setInitials("oja");
        user2.setUsername("Onkel Joakim Von And");
        users.add(user2);
    }

    public List<User> getAllUsers() {
        return users;
    }

    public void addUser(User user) {
        users.add(user);
    }
}
