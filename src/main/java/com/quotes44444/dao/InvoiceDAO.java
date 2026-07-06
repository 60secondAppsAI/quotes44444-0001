package com.quotes44444.dao;

import java.util.List;

import com.quotes44444.dao.GenericDAO;
import com.quotes44444.domain.Invoice;





public interface InvoiceDAO extends GenericDAO<Invoice, Integer> {
  
	List<Invoice> findAll();
	






}


