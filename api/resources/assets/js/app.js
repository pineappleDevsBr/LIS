import validation from './modules/validation';
import questions from './modules/questions';
import radios from './modules/radios';
import ajax from './modules/ajax';

validation.create('[data-validation]');
questions.create('[data-questions]');
radios.create('[data-radio]');
ajax.create('[data-ajax]');