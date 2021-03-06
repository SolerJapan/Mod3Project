package com.quiz.rest.webservices.quizwebservice.quiz;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.quiz.rest.webservices.quizwebservice.quiz.Quiz;

//Controller responsible for retrieving data via jpa 
//between the database and frontend
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class QuizJpaResource {

	
	
	@Autowired
	private QuizJpaRepository quizJpaRepository;
	
	@GetMapping("/jpa/users/{username}/quizs")
	public List<Quiz> getAllQuizs(@PathVariable String username){
				
		//username = "silver"; 
		System.out.println(username);
		return quizJpaRepository.findByUsername(username);
		//return todoService.findAll();
	}
	
	@GetMapping("/jpa/users/{username}/quizs/{id}")
	public Quiz getQuiz(@PathVariable String username, @PathVariable long id){
		return quizJpaRepository.findById(id).get();
		// return todoService.findById(id);
	}
	
	@DeleteMapping("/jpa/users/{username}/quizs/{id}")
	public ResponseEntity<Void> deleteQuiz(
			@PathVariable String username, @PathVariable long id){
		
		
		quizJpaRepository.deleteById(id);
			
		 return ResponseEntity.noContent().build();
		
	}
	
	//Edit update a quiz
	//PUT /users/{user_name}/quiz/{quiz_id}
	@PutMapping("/jpa/users/{username}/quizs/{id}")
	public ResponseEntity<Quiz> updateQuiz(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Quiz quiz){
		
		quiz.setUsername(username);
		
		Quiz quizUpdated = quizJpaRepository.save(quiz);
		
		return new ResponseEntity<Quiz>(quiz, HttpStatus.OK);
	}
	
	//Create a new quiz
	//POST /users/{user_name}/quizs/
	@PostMapping("/jpa/users/{username}/quizs")
	public ResponseEntity<Quiz> createQuiz(
			@PathVariable String username, @RequestBody Quiz quiz){
		
		quiz.setUsername(username);
		
		Quiz createdQuiz = quizJpaRepository.save(quiz);
		
	 URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdQuiz.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
