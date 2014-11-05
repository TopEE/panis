package dk.topee.panis.business.login.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserCredentials {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;
    public String email;
    public String password;

}
