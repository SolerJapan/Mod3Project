package com.quiz.rest.webservices.quizwebservice.quiz;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


//interface to call the jpa repository to call list by username
public interface QuizJpaRepository extends JpaRepository<Quiz, Long>{
	List<Quiz> findByUsername(String username);
}
