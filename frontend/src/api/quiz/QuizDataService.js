import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants';


//this api handles retriving data and handles all the delete, add,
//update, and create data in the programs database
class QuizDataService{
    
    //retrieve all data in database
    retrieveAllQuizs(name){
        console.log(name,`${name}`)
        return axios.get(`${JPA_API_URL}/users/${name}/quizs`);        
    }

    //retrieve single entry based on id
    retrieveQuiz(name, id){
        return axios.get(`${JPA_API_URL}/users/${name}/quizs/${id}`);
        //console.log('executed service')
    }
    //deletes entry based on id
    deleteQuiz(name,id){
        return axios.delete(`${JPA_API_URL}/users/${name}/quizs/${id}`);
        //console.log('executed service')
    }
    //updates single entry based on id
    updateQuiz(name,id, quiz){
        return axios.put(`${JPA_API_URL}/users/${name}/quizs/${id}`,quiz);
        //console.log('executed service')
    }
    //creates single entry based on id
    createQuiz(name, quiz){
        return axios.post(`${JPA_API_URL}/users/${name}/quizs/`,quiz);
        //console.log('executed service')
    }
}

export default new QuizDataService()