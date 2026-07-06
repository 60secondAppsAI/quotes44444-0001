package com.quotes44444.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;

import com.quotes44444.domain.ReturnRequest;
import com.quotes44444.dto.ReturnRequestDTO;
import com.quotes44444.dto.ReturnRequestSearchDTO;
import com.quotes44444.dto.ReturnRequestPageDTO;
import com.quotes44444.dto.ReturnRequestConvertCriteriaDTO;
import com.quotes44444.service.GenericService;
import com.quotes44444.dto.common.RequestDTO;
import com.quotes44444.dto.common.ResultDTO;
import java.util.List;
import java.util.Optional;





public interface ReturnRequestService extends GenericService<ReturnRequest, Integer> {

	List<ReturnRequest> findAll();

	ResultDTO addReturnRequest(ReturnRequestDTO returnRequestDTO, RequestDTO requestDTO);

	ResultDTO updateReturnRequest(ReturnRequestDTO returnRequestDTO, RequestDTO requestDTO);

    Page<ReturnRequest> getAllReturnRequests(Pageable pageable);

    Page<ReturnRequest> getAllReturnRequests(Specification<ReturnRequest> spec, Pageable pageable);

	ResponseEntity<ReturnRequestPageDTO> getReturnRequests(ReturnRequestSearchDTO returnRequestSearchDTO);
	
	List<ReturnRequestDTO> convertReturnRequestsToReturnRequestDTOs(List<ReturnRequest> returnRequests, ReturnRequestConvertCriteriaDTO convertCriteria);

	ReturnRequestDTO getReturnRequestDTOById(Integer returnRequestId);







}





