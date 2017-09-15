import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);    
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  describe('entering some text', () => {    
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('show that text in the text area', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });
  
    it('when submitted, clears the input', () => {

    });
  });

});
