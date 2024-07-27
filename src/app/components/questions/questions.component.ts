import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HttpRequestService } from 'src/app/common-services/http-request.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private http:HttpRequestService) { }
   questions:any=[];
   currentQuestionIndex:number=0;
   selectedAnswer: any | null = null; 
   isAnswerChecked: boolean = false; 
   correctAnswer: string | null = null;
   corrSel:any=[];
   correctAnswerNumber:number=0;
   incorrectAnswerNumber:number=0;
   @Input() dat:any
  ngOnInit(): void {
      console.log('data',this.dat)
   // this.getQuestions();
  }
  //get all questions
  // getQuestions(){
  //   this.http.request('get','questions',null).subscribe((res:any)=>{
  //     // this.data=res;
  //     this.questions=res;
  //   })
  // }

  ngOnChanges(changes: SimpleChanges){
    console.log('changes',changes['dat'].currentValue)
    // this.questions.push(this.data)
    this.questions=changes['dat'].currentValue
    console.log('quest',this.questions)
  }

  
  
  nextQuestions(){

    // if(this.selectedAnswer){
    //   console.log('selectans',this.selectedAnswer)
    //   this.selectedAnswer=null;
    // }
    // else if(this.currentQuestionIndex<this.questions.length-1){
    //    this.currentQuestionIndex++;
    //    console.log('index',this.questions.length)
    // }else{
    //   console.log('quize completed')
    // }
    // if (this.selectedAnswer) {
    //   if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswer) {
    //     // Correct answer logic
    //     console.log('Correct answer:', this.selectedAnswer);
    //   } else {
    //     // Wrong answer logic
    //     console.log('Wrong answer:', this.selectedAnswer);
    //     this.isAnswerChecked = true; // Set the flag to show the feedback
    //   }
      
    //   this.correctAnswer = this.questions[this.currentQuestionIndex].correctAnswer; // Store the correct answer
    //   this.selectedAnswer = null; // Reset the selected answer for the next question
    // }

    // Move to the next question if available
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
     // this.isAnswerChecked = false; // Reset the answer check status for the next question
    } else {
      console.log('Quiz completed');
      // Optionally, you can reset or show results here
    }
  
  }
  //previousQuestion logic
  previousQuestions(){
    console.log('previodindex',this.currentQuestionIndex)
    if(this.currentQuestionIndex>0){
      this.currentQuestionIndex--;
    }
  }

   // Submit the selected answer
   submitAnswer() {
    if (this.selectedAnswer) {
      
      console.log('selected ans',this.selectedAnswer.isCorrect)
      
      this.isAnswerChecked = true; // Mark the answer as checked

      this.correctAnswer = this.questions[this.currentQuestionIndex].options.find((x:any)=>{
        return x.isCorrect=true;
        
       
        
      })// Store the correct answer
      this.corrSel=this.correctAnswer
    // Store the correct answer
      console.log('correcop', this.corrSel.isCorrect)

      // Check if the answer is correct or incorrect
      if (this.selectedAnswer.isCorrect == this.corrSel.isCorrect) {
        this.correctAnswerNumber++;
        console.log('Correct answer:', this.selectedAnswer);
      } else {
        this.incorrectAnswerNumber++;
        console.log('Wrong answer:', this.selectedAnswer);
      }
    }
  }

  //restart quiz
  restartQuiz(){
    this.correctAnswerNumber=0;
    this.incorrectAnswerNumber=0;
    this.currentQuestionIndex=0;
  }
}
