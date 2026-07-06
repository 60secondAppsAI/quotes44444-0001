package com.quotes44444.dao;

import java.util.List;

import com.quotes44444.dao.GenericDAO;
import com.quotes44444.domain.Dispute;





public interface DisputeDAO extends GenericDAO<Dispute, Integer> {
  
	List<Dispute> findAll();
	






}


