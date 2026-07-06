package com.quotes44444.dao;

import java.util.List;

import com.quotes44444.dao.GenericDAO;
import com.quotes44444.domain.Notification;





public interface NotificationDAO extends GenericDAO<Notification, Integer> {
  
	List<Notification> findAll();
	






}


