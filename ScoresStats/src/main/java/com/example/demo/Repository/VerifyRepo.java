package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.VerifyModel;

public interface VerifyRepo extends JpaRepository<VerifyModel, Long> {

	VerifyModel findByusername(String username);

}
