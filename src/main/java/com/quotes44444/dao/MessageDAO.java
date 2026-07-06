package com.quotes44444.dao;

import java.util.List;

import com.quotes44444.dao.GenericDAO;
import com.quotes44444.domain.Message;





public interface MessageDAO extends GenericDAO<Message, Integer> {
  
	List<Message> findAll();
	






}


