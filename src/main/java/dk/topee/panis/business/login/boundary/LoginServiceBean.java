package dk.topee.panis.business.login.boundary;

import javax.ejb.Stateless;

@Stateless
public class LoginServiceBean {

    public String login() {
        System.out.println("LoginServiceBean.login");

        return "String";

    }
}
