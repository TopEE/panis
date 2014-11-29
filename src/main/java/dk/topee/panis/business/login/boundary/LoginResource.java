package dk.topee.panis.business.login.boundary;

import dk.topee.panis.business.login.entity.AccessElement;
import dk.topee.panis.business.login.entity.LoginElement;

import javax.annotation.security.PermitAll;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.logging.Logger;

@Path("login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginResource {

    private static final Logger log = Logger.getLogger(LoginResource.class.getName());

    @Inject
    LoginServiceBean loginService;

    @POST
    @Path("login")
    @PermitAll
    public AccessElement login(@Context HttpServletRequest request, LoginElement loginElement) {
        log.info("Logging into the application with username [" + loginElement.getUsername() + "]");
        AccessElement accessElement = loginService.login(loginElement);
        if (accessElement != null) {
            request.getSession().setAttribute(AccessElement.PARAM_AUTH_ID, accessElement.getAccessId());
            request.getSession().setAttribute(AccessElement.PARAM_AUTH_TOKEN, accessElement.getAccessToken());
        }
        return accessElement;
    }

}