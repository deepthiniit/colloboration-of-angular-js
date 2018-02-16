package com.niit.dao;


import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.niit.model.User;

@Repository("userDao")


public class UserDaoImpl implements UserDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	@Autowired
	public UserDaoImpl(SessionFactory sessionFactory){
		super();
		System.out.println("UserDaoImpl bean is created");
		this.sessionFactory = sessionFactory;
	}
	@Transactional
	public void registerUser(User user){
		System.out.println("registerUser in dao" + user);
		Session session=sessionFactory.getCurrentSession();
		session.save(user);
		
	}
	@Transactional
	public boolean isEmailUnique(String email){
		Session session=sessionFactory.getCurrentSession();
		User user=(User)session.get(User.class,email);
		if(user==null)
			return true;
		else
			return false;
		
	}
	@Transactional
	public User login(User user) {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from user where email=? and password=?");
		query.setString(0,user.getEmail());
		query.setString(1,user.getPassword());
		query.uniqueResult();
		return (User) query.uniqueResult();
	}
	@Transactional
	public void update(User validUser) {
		Session session=sessionFactory.getCurrentSession();
		session.update(validUser);	
		
	}
	@Transactional
	public void getUser() {
		// TODO Auto-generated method stub
		
	}

}
