package dk.topee.panis.business.login.entity;

import javax.persistence.*;

@Entity
@NamedQueries(
        {@NamedQuery(
                name= UserGroup.BY_USERNAME,
                query = "select ug from UserGroups ug where ug.username = :username")
        }
)
public class UserGroup {

    public static final String BY_USERNAME = "UserCredentials_findEntityByUsername";


    @Id
    @GeneratedValue
    private long id;

    private String username;

    private String groupname;

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

    public String getGroupname() {
        return groupname;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname;
    }
}
