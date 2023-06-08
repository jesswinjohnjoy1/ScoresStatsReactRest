package com.example.demo.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.SSModel;
import com.example.demo.Model.VerifyModel;
import com.example.demo.Service.SSService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class SSController {
	@Autowired
	private SSService service;
	
	@Tag(name = "Signin", description = "Login Endpoint")
	@PostMapping("/Signin")
	private String Login(@RequestBody Map<String, String> xLogin) {
	    String username = xLogin.get("username");
	    String password = xLogin.get("password");
	    String result = service.Login(username, password);
	    return result;
	}

	@Tag(name = "Signup", description = "Signup Endpoint")
    @PostMapping("/Signup")
    public String Signup(@RequestBody VerifyModel user) {
        return service.Signup(user);
    }
	
	// Products
	@Tag(name = "List Players", description = "List All Players")
	@GetMapping("/list")
	private List<SSModel> Games(){
		return service.getData();
	}
	
	@Tag(name = "Sort Players by ID", description = "View Player Data")
	@GetMapping("/data/{id}")
	private Optional<SSModel> viewGame(@PathVariable Long id) {
		return service.findbyID(id);
	}
	
	
	@Tag(name = "Add Players", description = "Add New Players")
	@PostMapping("/add")
	private SSModel addProduct(@RequestBody SSModel data) {
		return service.addData(data);
	}
	
	@Tag(name = "Edit Player", description = "Edit Existing Player")
	@PutMapping("/edit/{id}")
	private SSModel editProduct(@PathVariable Long id, @RequestBody SSModel data) {
		return service.editData(data, id);
	}
	
	@Tag(name = "Delete Data", description = "Delete The Existing Players")
	@DeleteMapping("/delete/{id}")
	private String deleteProduct(@PathVariable Long id) {
		return service.deleteData(id);
	}
}
