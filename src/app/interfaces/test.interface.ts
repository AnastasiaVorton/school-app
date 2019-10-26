export interface TestInterface {
  id: number;
  content_type: string;
  learner_type: string;
  test_type: string;
  question: string;
  choices: TestChoiceInterface[];
}

export interface TestChoiceInterface {
  is_correct: boolean;
  content: string;
}
