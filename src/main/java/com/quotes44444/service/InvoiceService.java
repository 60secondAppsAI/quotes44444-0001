package com.quotes44444.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;

import com.quotes44444.domain.Invoice;
import com.quotes44444.dto.InvoiceDTO;
import com.quotes44444.dto.InvoiceSearchDTO;
import com.quotes44444.dto.InvoicePageDTO;
import com.quotes44444.dto.InvoiceConvertCriteriaDTO;
import com.quotes44444.service.GenericService;
import com.quotes44444.dto.common.RequestDTO;
import com.quotes44444.dto.common.ResultDTO;
import java.util.List;
import java.util.Optional;





public interface InvoiceService extends GenericService<Invoice, Integer> {

	List<Invoice> findAll();

	ResultDTO addInvoice(InvoiceDTO invoiceDTO, RequestDTO requestDTO);

	ResultDTO updateInvoice(InvoiceDTO invoiceDTO, RequestDTO requestDTO);

    Page<Invoice> getAllInvoices(Pageable pageable);

    Page<Invoice> getAllInvoices(Specification<Invoice> spec, Pageable pageable);

	ResponseEntity<InvoicePageDTO> getInvoices(InvoiceSearchDTO invoiceSearchDTO);
	
	List<InvoiceDTO> convertInvoicesToInvoiceDTOs(List<Invoice> invoices, InvoiceConvertCriteriaDTO convertCriteria);

	InvoiceDTO getInvoiceDTOById(Integer invoiceId);







}





