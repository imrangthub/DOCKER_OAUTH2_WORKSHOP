package com.imranmadbar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@SpringBootApplication
@EnableResourceServer
public class AuthoriztionServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthoriztionServerApplication.class, args);
	}

}
