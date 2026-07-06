package com.quotes44444.dao;

import java.util.List;

import com.quotes44444.dao.GenericDAO;
import com.quotes44444.domain.ReturnRequest;





public interface ReturnRequestDAO extends GenericDAO<ReturnRequest, Integer> {
  
	List<ReturnRequest> findAll();
	






}


