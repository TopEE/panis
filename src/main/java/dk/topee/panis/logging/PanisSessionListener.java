package dk.topee.panis.logging;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import java.util.logging.Logger;

@WebListener
public class PanisSessionListener implements HttpSessionListener {

    private static final Logger log = Logger.getLogger("PanisSessionListerner");

    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent) {
        HttpSession httpSession = httpSessionEvent.getSession();
        String id = httpSession.getId();
        long creationTime = httpSession.getCreationTime();
        System.out.println("Session created");
        log.fine("Session created: id=" + id + ", create time=" + creationTime);
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
        log.fine("Session destroyed");
    }
}
