package dk.topee.panis.business.registration.entity;

import javax.persistence.MappedSuperclass;

/**
 * Created by feb on 11-11-2014.
 */
@MappedSuperclass
public class AnotherEntity {

    public String getAnotherColumn() {
        return anotherColumn;
    }

    public void setAnotherColumn(String anotherColumn) {
        this.anotherColumn = anotherColumn;
    }

    private String anotherColumn;
}
