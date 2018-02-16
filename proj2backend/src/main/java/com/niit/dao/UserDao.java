package com.niit.dao;

import org.springframework.stereotype.Repository;

import com.niit.model.User;
@Repository("userDao")
public interface UserDao {
	void registerUser(User user);

	boolean isEmailUnique(String email);

	User login(User user);

	void update(User validUser);

	void getUser();
}
