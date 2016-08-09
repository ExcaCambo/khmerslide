package org.khmerslide.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
@RequestMapping("/rest/user")
public class UserController {
	
//	@RequestMapping(value = { "/", "/index", "/home" })
//	public String adminPage() {
//		return "user/index";
//	}
//	
//	@RequestMapping(value = { "/upload-file"})
//	public String uploadPage() {
//		return "user/upload-file";
//	}
//	
//	@RequestMapping(value = { "/history"})
//	public String historyPage() {
//		return "user/view-history";
//	}
//	
//	@RequestMapping(value = { "/my-document"})
//	public String myDocumentPage() {
//		return "user/my-document";
//	}
//	
//	@RequestMapping(value = { "/save-list"})
//	public String saveListPage() {
//		return "user/save-list";
//	}
	
	@Autowired
	private HttpHeaders header;
	
	@Autowired
	private RestTemplate rest;
	
	@Autowired
	private String WS_URL;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Map<String , Object>> user(){
		HttpEntity<Object> request = new HttpEntity<Object>(header);
		ResponseEntity<Map> response = rest.exchange(WS_URL + "/user/get-user/", HttpMethod.GET , request , Map.class) ;
		return new ResponseEntity<Map<String , Object>>(response.getBody() , HttpStatus.OK);
	}
	
//	@RequestMapping(method = RequestMethod.POST)
//	public ResponseEntity<Map<String , Object>> adduser(@RequestBody AddUser addUser){
//		HttpEntity<Object> request = new HttpEntity<Object>(addUser,header);
//		ResponseEntity<Map> response = rest.exchange(WS_URL + "/user", HttpMethod.POST , request , Map.class) ;
//		return new ResponseEntity<Map<String , Object>>(response.getBody() , HttpStatus.OK);
//	}
	

}
