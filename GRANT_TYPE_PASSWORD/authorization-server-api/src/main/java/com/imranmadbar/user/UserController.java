package com.imranmadbar.user;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/authorization-server-user")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/info")
	public Map<String, Object> index(){
		
		System.out.println("From Authorization User Controller");
		
		Authentication curretnAuthentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("Curretn Authentication All       ####: "+curretnAuthentication);
		System.out.println("Curretn Authentication Name      ####: "+curretnAuthentication.getName());
		System.out.println("Curretn Authentication Principal ####: "+curretnAuthentication.getPrincipal());
		
		Map<String, Object> resMap = new HashMap<>();

		resMap.put("msg", "This is form Authorization Server User Congroller");
		resMap.put("Principal",curretnAuthentication.getPrincipal());
		resMap.put("AuthenticationInfo",curretnAuthentication);

		return resMap;
				
	}

	@GetMapping("/user/list")
	public String list(Model model) {
		model.addAttribute("userList", userService.list());
		return "user/home";
	}

	@GetMapping("/user/create")
	public String create(Model model) {
		UserEntity obj = new UserEntity();
		model.addAttribute("userObj", obj);
		return "user/userCreate";
	}

	@PostMapping("/user/save")
	public String saveuser(@RequestBody UserEntity userObj) {
		if (userObj ==null ) {
			return "No user found ";
		}
		userService.userSave(userObj);
		return "Save Successfully done !";
	}

	@GetMapping("/user/view/{id}")
	public String view(@PathVariable("id") long userId, Model model) {
		UserEntity userObj = null;
		try {
			userObj = userService.findById(userId);
		} catch (Exception ex) {
			model.addAttribute("errorMessage", "user not found");
		}
		model.addAttribute("userObj", userObj);
		return "user/userView";
	}

	@GetMapping("/user/edit/{id}")
	public String eidt(Model model, @PathVariable("id") Long userId) {
		model.addAttribute("userObj", userService.findById(userId));
		return "user/userEdit";
	}

	@PostMapping("/user/update")
	public String updateuser(Model model, UserEntity userObj, BindingResult result) {
		if (!result.hasErrors()) {
			userService.userUpdate(userObj);
		}
		return "redirect:/user/list";
	}

	@GetMapping("/user/delete/{id}")
	public String userDelete(Model model, @PathVariable("id") Long id) {
		userService.userDelete(id);
		return "redirect:/user/list";
	}

}
