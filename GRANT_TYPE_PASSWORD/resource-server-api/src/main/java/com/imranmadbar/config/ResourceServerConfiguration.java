package com.imranmadbar.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.provider.error.OAuth2AccessDeniedHandler;
import org.springframework.security.oauth2.provider.token.RemoteTokenServices;

@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

//	@Autowired
//	private DataSource dataSource;
	
	
	@Override
	public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers("/home/**").permitAll() // Home end point not allow yet because anonymous user disable here. 
            .antMatchers("/user/**").access("hasRole('USER') or hasAuthority('ADMIN')")
            .antMatchers("/admin/**").access("hasRole('ADMIN')")
            .and().exceptionHandling().accessDeniedHandler(new OAuth2AccessDeniedHandler())
            .and()
            .anonymous().disable();
	}
	
	

//For DB Remote Token Service	

//	@Bean
//	public TokenStore tokenStore() {
//		return new JdbcTokenStore(dataSource);
//	}

//For  Remote Token Service

	@Bean
	@Primary
	public RemoteTokenServices tokenService() {
		RemoteTokenServices tokenService = new RemoteTokenServices();
		tokenService.setCheckTokenEndpointUrl("http://oauth2-authorization-server-api:8081/oauth/check_token");
//		tokenService.setCheckTokenEndpointUrl("http://localhost:8081/oauth/check_token");
		tokenService.setClientId("imranmadbarClientAppId");
		tokenService.setClientSecret("appSecret");
		return tokenService;
	}
	




}
