import React, { Component } from 'react'

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizQuestions: []
    };
  }

  componentDidMount() {
    const req = new Request('http://localhost:8080/api/db');
    fetch(req)
    .then(res => res.json())
    .then((result) => {
      console.log(result.quiz_questions[0].instruction_text)
      this.setState({
        quizQuestions: result.quiz_questions
      });
    }, (error) => {
      console.log('Error: ', error)
    });
  }

  render() {
    const questions = this.state.quizQuestions;
    return (
      <div>
        <div className='QuizQuestion'>
          {
            questions[0] && this.state.quizQuestions[0].instruction_text
          }
        </div>

      </div>
    )
  }
}
