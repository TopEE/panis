package dk.topee.panis;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import static javax.ws.rs.core.Response.Status;

@Provider
public class RuntimeExceptionMapper implements ExceptionMapper<RuntimeException> {

    @Override
    public Response toResponse(RuntimeException e) {
        System.out.println("RuntimeExceptionMapper.toResponse");
        return Response.status(Status.INTERNAL_SERVER_ERROR).header("x-message", e.getMessage()).build();

    }

}
