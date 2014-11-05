package dk.topee.panis.business.login.boundary;

import dk.topee.panis.business.login.entity.UserCredentials;

import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.logging.Logger;

@Path("login")
@Produces(MediaType.APPLICATION_JSON)
public class LoginResource {

    private static final Logger log = Logger.getLogger(LoginResource.class.getName());

    @Inject
    LoginServiceBean loginService;

    @GET
    public UserCredentials getUsername() {
        log.entering(getClass().getName(), "getUsername");
        log.exiting(getClass().getName(), "getUsername");

        return loginService.login();

    }

}