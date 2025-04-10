describe('login', () => {
    it('posts a blog', () => {
        cy.visit("http://localhost:5173/");

        cy.wait(1000); 

        cy.get("#title").type("React");

        const longContent = `useRef returns an object with a single property:
      current: Initially, it's set to the initialValue you have passed. You can later set it to something else.
       If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
      On the next renders, useRef will return the same object.
      Caveats: You can mutate the ref.current property. Unlike state, it is mutable. However, 
      if it holds an object that is used for rendering 
      (for example, a piece of your state), then you shouldn’t mutate that object.
      When you change the ref.current property, React does not re-render your component.
       React is not aware of when you change it because a ref is a plain JavaScript object.
      Do not write or read ref.current during rendering, except for initialization.
       This makes your component’s behavior unpredictable.
      In Strict Mode, React will call your component function twice in order to help you find accidental impurities.
       This is development-only behavior and does not affect production.
      Each ref object will be created twice, but one of the versions will be discarded. 
      If your component function is pure (as it should be), this should not affect the behavior.
      `;
        cy.wait(1000);
        cy.get("#content").type(longContent, {
            delay: 3
        });

        cy.wait(1000);
        cy.get("#post").click();
    });
});