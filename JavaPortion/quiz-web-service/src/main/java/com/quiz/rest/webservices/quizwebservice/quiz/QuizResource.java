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

@RestController
@CrossOrigin(origins="http://localhost:4200")

public class QuizResource {
	
	@Autowired
	private QuizHardcodedService quizService;
	
	@GetMapping("/users/{username}/quizs")
	public List<Quiz> getAllQuizs(@PathVariable String username){
		
		return quizService.findAll();
	}
	
	@GetMapping("/users/{username}/quizs/{id}")
	public Quiz getQuiz(@PathVariable String username,@PathVariable long id){
		return quizService.findById(id);
	}
	
	@DeleteMapping("/users/{username}/quizs/{id}")
	public ResponseEntity<Void> deleteQuiz(
			@PathVariable String username, @PathVariable long id){
		Quiz quiz = quizService.deleteById(id);
		if(quiz!=null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
	
	//Edit update a Quiz
	//PUT /users/{user_name}/quiz/{quiz_id}
	@PutMapping("/users/{username}/quizs/{id}")
	public ResponseEntity<Quiz> updateQuiz(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Quiz quiz){
		
		Quiz quizUpdated = quizService.save(quiz);
		
		return new ResponseEntity<Quiz>(quiz, HttpStatus.OK);
	}
	
	//Create a new Quiz
	//POST /users/{user_name}/quizs/
	@PostMapping("/users/{username}/quizs")
	public ResponseEntity<Quiz> updateQuiz(
			@PathVariable String username, @RequestBody Quiz quiz){
		
		Quiz createdQuiz = quizService.save(quiz);
		
	 URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdQuiz.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
