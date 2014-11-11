package dk.topee.test;

import javax.persistence.EntityManager;

public abstract class UnitOfWork {

    protected EntityManager em;

    public abstract void work();

}
