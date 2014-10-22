package dk.topee.panis.business.login.boundary;

import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.logging.Logger;

@Path("login")
@Produces(MediaType.APPLICATION_JSON)
public class LoginResource {

    private static final Logger log = Logger.getLogger(LoginResource.class.getName());

    @GET
    public JsonObject getUsername() {
        log.entering(getClass().getName(), "getUsername");
        log.exiting(getClass().getName(), "getUsername");
        return Json.createObjectBuilder().add("name", "Flemming").build();

    }

}