package dk.topee.panis.business.registration.boundary;

import dk.topee.panis.business.login.entity.UserCredential;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("registration")
@Produces(MediaType.APPLICATION_JSON)
public class RegistrationResource {

    @Inject
    RegistrationServiceBean registrationService;

    @GET
    @Path("users")
    public List<UserCredential> getAllUsers() {
        return registrationService.getAllUsers();
    }

}