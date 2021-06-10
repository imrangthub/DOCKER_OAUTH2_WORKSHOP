package com.imranmadbar.admin;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/authorization-server-admin")
public class AdminController {
	
	@GetMapping("/info")
	public Map<String, Object> index(){
		
		System.out.println("From Admin Controller");
		
		Authentication curretnAuthentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("Curretn Authentication All       ####: "+curretnAuthentication);
		System.out.println("Curretn Authentication Name      ####: "+curretnAuthentication.getName());
		System.out.println("Curretn Authentication Principal ####: "+curretnAuthentication.getPrincipal());
		
		Map<String, Object> resMap = new HashMap<>();

		resMap.put("msg", "This is form Authorization Server Admin Congroller");
		resMap.put("Principal",curretnAuthentication.getPrincipal());
		resMap.put("AuthenticationInfo",curretnAuthentication);

		return resMap;
				
	}
	
	
	@GetMapping("/per-write")
	@PreAuthorize("#oauth2.hasScope('write')")
	public Map<String, Object> adminWrite(){
		
		System.out.println("From Admin Controller WIRTE PERMISSION");
		
		Authentication curretnAuthentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("Curretn Authentication All       ####: "+curretnAuthentication);
		System.out.println("Curretn Authentication Name      ####: "+curretnAuthentication.getName());
		System.out.println("Curretn Authentication Principal ####: "+curretnAuthentication.getPrincipal());
		
		Map<String, Object> resMap = new HashMap<>();

		resMap.put("msg", "This is form Authorization Server Admin Congroller");
		resMap.put("Principal",curretnAuthentication.getPrincipal());
		resMap.put("AuthenticationInfo",curretnAuthentication);

		return resMap;
				
	}
	
	@GetMapping("/per-read")
	@PreAuthorize("#oauth2.hasScope('read')")
	public Map<String, Object> adminRead(){
		
		System.out.println("From Admin Controller Read PERMISSION");
		
		Authentication curretnAuthentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("Curretn Authentication All       ####: "+curretnAuthentication);
		System.out.println("Curretn Authentication Name      ####: "+curretnAuthentication.getName());
		System.out.println("Curretn Authentication Principal ####: "+curretnAuthentication.getPrincipal());
		
		Map<String, Object> resMap = new HashMap<>();

		resMap.put("msg", "This is form Authorization Server Admin Congroller");
		resMap.put("Principal",curretnAuthentication.getPrincipal());
		resMap.put("AuthenticationInfo",curretnAuthentication);

		return resMap;
				
	}
	
	

}
