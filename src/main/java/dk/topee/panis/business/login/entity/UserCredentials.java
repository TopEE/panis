package dk.topee.panis.business.login.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserCredentials {

    @Id
    public int id;
    public String email;
    public String password;

}
