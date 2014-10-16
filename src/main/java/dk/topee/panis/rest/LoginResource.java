package dk.topee.panis.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/login")
public class LoginResource {

    @GET
    public String getUsername() {
        return "Flemming Behrend";
    }

}
