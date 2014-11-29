package dk.topee.panis.business.login.entity;

import javax.persistence.*;

@Entity
@NamedQueries(
        {@NamedQuery(
                name= UserCredential.BY_NAME_AND_PASSWORD,
                query = "select uc from UserCredentials uc where uc.username = :username and uc.password = :password")
        }
)
public class UserCredential {

    public static final String BY_NAME_AND_PASSWORD = "UserCredentials_findEntityByNameAndPassword";

    @Id
    @GeneratedValue
    private long id;

    private String username;

    private String password;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
