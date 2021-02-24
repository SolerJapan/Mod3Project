package com.quiz.rest.webservices.quizwebservice.quiz;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface QuizJpaRepository extends JpaRepository<Quiz, Long>{
	List<Quiz> findByUsername(String username);
}
