package com.quotes44444.dao;

import java.util.List;

import com.quotes44444.dao.GenericDAO;
import com.quotes44444.domain.Offer;





public interface OfferDAO extends GenericDAO<Offer, Integer> {
  
	List<Offer> findAll();
	






}


