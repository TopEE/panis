package dk.topee.panis.business.login.boundary;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.security.Principal;
import java.util.logging.Logger;

@Path("login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginResource {

    private static final Logger log = Logger.getLogger(LoginResource.class.getName());

    @Inject
    LoginServiceBean loginService;

    @GET
    @RolesAllowed({"administrators"})
    public String getLoggedInUser(@Context HttpServletRequest request) {
        String authType = request.getAuthType();
        String remoteUser = request.getRemoteUser();
        Principal userPrincipal = request.getUserPrincipal();
        return "{\"besked\":\"fejl\"}";
    }

}