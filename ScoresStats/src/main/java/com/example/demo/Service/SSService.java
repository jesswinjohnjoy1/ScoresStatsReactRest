package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.SSModel;
import com.example.demo.Model.VerifyModel;
import com.example.demo.Repository.SSRepo;
import com.example.demo.Repository.VerifyRepo;

@Service
public class SSService {
	
	@Autowired
	private SSRepo ssrepo;
	@Autowired
	private VerifyRepo verifyrepo;

	//Login Logic
	public String Login(String username, String password) {
		VerifyModel xuser = verifyrepo.findByusername(username);
		if (xuser == null) {
			return "invalidusername";
		} else {
			if (xuser.getPassword().equals(password)) {
				return "success";
			} else {
				return "invalidpassword";
			}
		}
	}

	public String Signup(VerifyModel xuser) {
	    String username = xuser.getUsername();
	    VerifyModel authuser = verifyrepo.findByusername(username);
	    if (authuser == null) {
	        verifyrepo.save(xuser);
	        return "useradded";
	    } else {
	        return "existingusername";
	    }
	}

	public List<SSModel> getData() {
		return ssrepo.findAll();
	}
	
	public SSModel addData(SSModel data) {
		return ssrepo.save(data);
	}
	
	public SSModel editData(SSModel data, Long id) {
		SSModel edx = ssrepo.findById(id).orElse(data);
		if (edx != null) {
			edx.setPlayername(data.getPlayername());
			edx.setTeamname(data.getTeamname());
			edx.setAssists(data.getAssists());
			edx.setGoals(data.getGoals());
			edx.setPlayerimg(data.getPlayerimg());
			return ssrepo.saveAndFlush(edx);
		} else {
			return null;
		}
	}
	
	public String deleteData(Long id) {
		ssrepo.deleteById(id);
		return "Deleted Successfully";
	}
	
	public Optional<SSModel> findbyID(Long id) {
		return ssrepo.findById(id);
	}
}
