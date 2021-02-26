package com.quiz.rest.webservices.quizwebservice.quiz;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

//hardcoded data for testing purposes used with basic
@Service
public class QuizHardcodedService {

	private static List<Quiz> quizs = new ArrayList(); 
	private static long idCounter = 0;
	
	static {
		quizs.add(new Quiz(++idCounter,"admin","What does 'hai' mean","yes","no","high","hey","yes"));
		quizs.add(new Quiz(++idCounter,"admin","What does 'iie' mean","yes","no","yay","hey","no"));
		quizs.add(new Quiz(++idCounter,"admin","What does 'wakaranai' mean","yes","no","i dont understand","understand","i dont understand"));

	}
	public List<Quiz> findAll() {
		return quizs;
	}
	
	public Quiz save(Quiz quiz) {
		if(quiz.getId()==-1 || quiz.getId()==0) {
			quiz.setId(++idCounter);
			quizs.add(quiz);
		}else {
			deleteById(quiz.getId());
			quizs.add(quiz);
		}
		return quiz;
	}
	
	public Quiz deleteById(long id) {
		Quiz quiz = findById(id);
		
		if(quiz==null) 
		{
			return null;
		}
	
		if(quizs.remove(quiz))
		{
			return quiz;
		}
		
		return null;
	
	}

	public Quiz findById(long id) {
		for(Quiz quiz:quizs) {
			if(quiz.getId() == id) {
				return quiz;
			}
		}
		return null;
	}
	
}
