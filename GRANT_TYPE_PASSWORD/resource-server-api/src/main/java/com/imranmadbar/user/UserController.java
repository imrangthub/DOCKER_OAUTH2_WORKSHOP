package com.imranmadbar.user;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/resource")
public class UserController {

	@GetMapping("/user")
	public Map<String, Object> index(){
		
		System.out.println("From Resource User Controller");
		
		Authentication curretnAuthentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("Curretn Authentication All       ####: "+curretnAuthentication);
		System.out.println("Curretn Authentication Name      ####: "+curretnAuthentication.getName());
		System.out.println("Curretn Authentication Principal ####: "+curretnAuthentication.getPrincipal());
		
		Map<String, Object> resMap = new HashMap<>();

		resMap.put("msg", "This is form Resource Server User Congroller");
		resMap.put("Principal",curretnAuthentication.getPrincipal());
		resMap.put("AuthenticationInfo",curretnAuthentication);

		return resMap;
				
	}

	@GetMapping("/per-write")
	@PreAuthorize("#oauth2.hasScope('write')")
	public String adminWrite() {

		System.out.println("From User Controller WRITE PERMISSION");

		Authentication curretnAuthentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("Curretn Authentication All       ####: " + curretnAuthentication);
		System.out.println("Curretn Authentication Name      ####: " + curretnAuthentication.getName());
		System.out.println("Curretn Authentication Principal ####: " + curretnAuthentication.getPrincipal());

		return "From User Controller";

	}

	@GetMapping("/per-read")
	@PreAuthorize("#oauth2.hasScope('read')")
	public String userWrite() {

		System.out.println("From User Controller READ PERMISITION");

		Authentication curretnAuthentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("Curretn Authentication All       ####: " + curretnAuthentication);
		System.out.println("Curretn Authentication Name      ####: " + curretnAuthentication.getName());
		System.out.println("Curretn Authentication Principal ####: " + curretnAuthentication.getPrincipal());

		return "From User Controller";

	}

}
