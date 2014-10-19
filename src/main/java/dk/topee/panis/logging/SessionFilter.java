package dk.topee.panis.logging;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

//@WebFilter("/*")
public class SessionFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("Filter");
    }

    @Override
    public void destroy() {

    }

}
