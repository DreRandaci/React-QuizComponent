import React, { Component } from 'react';
let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizPosition: 1
    };
  }

  componentDidMount() {
    // const req = new Request('http://localhost:8080/api/db');
    // fetch(req)
    // .then(res => res.json())
    // .then((result) => {
    //   this.setState({
    //     quizQuestions: result.quiz_questions
    //   });
    // }, (error) => {
    //   console.log('Error: ', error)
    // });
  }

  render() {
    // const { quizQuestions } = this.state;
    const { quizPosition } = this.state;
    return (
      <div>
        <div className='QuizQuestion'>
          {
            quizData[quizPosition] && quizData[quizPosition].instruction_text
          }
        </div>

      </div>
    )
  }
}

export default Quiz;