package dk.topee.panis.business.registration.boundary;

import dk.topee.panis.business.registration.entity.User;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.logging.Logger;

@Path("registration")
@Produces(MediaType.APPLICATION_JSON)
public class RegistrationResource {

    private static final Logger log = Logger.getLogger(RegistrationResource.class.getName());

    @Inject
    RegistrationServiceBean registrationService;

    @GET
    @Path("users")
    public List<User> getAllUsers() {
        log.entering(getClass().getName(), "getAllUsers");
        List<User> allUsers = registrationService.getAllUsers();
        log.exiting(getClass().getName(), "getAllUsers");
        return allUsers;
    }

    @POST
    @Path("user")
    public Response addUser(User user) {
        registrationService.addUser(user);
        return Response.ok().build();
    }

}