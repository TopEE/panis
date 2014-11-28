package dk.topee.panis.business.login.boundary;

import javax.annotation.security.DenyAll;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("login")
@Produces(MediaType.APPLICATION_JSON)
public class LoginResource {

//    private static final Logger log = Logger.getLogger(LoginResource.class.getName());

    @Inject
    LoginServiceBean loginService;

    @GET
    @DenyAll
    public String getUsername() {
        System.out.println("LoginResource.getUsername");
        return loginService.login();
    }

}