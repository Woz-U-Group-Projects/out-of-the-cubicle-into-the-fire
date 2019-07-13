package com.group.cubiclefire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MySQLUserDetailsService userService;

	@GetMapping("/")
	public String getHome() {
		return "home";
	}

	@GetMapping("/register")
	public String getRegister() {
		return "register";
	}

	@GetMapping("/login")
	public String getLogin() {
		return "login";
	}

	@GetMapping("/logout")
	public String getLogout() {
		return "logout";
	}

	@GetMapping("/profile")
	public String getProfile() {
		return "profile";
	}
	
	@PostMapping("/register")
	public String createUser(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("email") String email, Model model) {
		User foundUser = userRepository.findByUsername(username);
		if (foundUser == null) {
			User newUser = new User();
			newUser.setUsername(username);
			newUser.setPassword(password);
			newUser.setEmail(email);
			userService.Save(newUser);
			return "login";
		}
		else {
			model.addAttribute("exists", true);
			return "signup";
		}
	}
}