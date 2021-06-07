package com.imranmadbar.home;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class HomeController {
	
	@GetMapping({"/home"})
	public Map<String, Object> testMsg(){
		
		Authentication curretnAuthentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("Curretn Authentication All       ####: "+curretnAuthentication);
		System.out.println("Curretn Authentication Name      ####: "+curretnAuthentication.getName());
		System.out.println("Curretn Authentication Principal ####: "+curretnAuthentication.getPrincipal());
		
		Map<String, Object> resMap = new HashMap<>();

		resMap.put("msg", "This is form Authorization Server Home Congroller");
		resMap.put("Principal",curretnAuthentication.getPrincipal());
		resMap.put("AuthenticationInfo",curretnAuthentication);

		return resMap;
	}
	
	@PostMapping("/home")
    public Map<String, Object> getAll(@RequestBody(required = false) String reqObj) {
		
		System.out.println("From Admin Controller");

		Authentication curretnAuthentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("Curretn Authentication All       ####: " + curretnAuthentication);
		System.out.println("Curretn Authentication Name      ####: " + curretnAuthentication.getName());
		System.out.println("Curretn Authentication Principal ####: " + curretnAuthentication.getPrincipal());

		Map<String, Object> resMap = new HashMap<>();

		resMap.put("msg", "This is form Authorization Server Home Congroller");
		resMap.put("Principal",curretnAuthentication.getPrincipal());
		resMap.put("AuthenticationInfo",curretnAuthentication);

		return resMap;
	}
	


}