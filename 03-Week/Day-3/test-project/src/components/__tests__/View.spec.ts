import { render, screen } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import View from '../View.vue';

describe('View', () => {
  const viewText = "Hello from inside a view";
  
  it("renders span correctly", async () => {
    const viewId = "viewId";
    
    render(View, {
      props: { element: "span", id: viewId },
      slots: { default: viewText }
    });

    const view = await screen.findByText(viewText);
    
    // assert
    expect(view.id).toBe(viewId);  
    expect(view.innerHTML).toBe(viewText);  
    expect(view.tagName).toBe("SPAN");
  });

                it("snapshot matches",()=>{
                    const wrapper = render(View,{props: {element :"div"}});
                        expect(wrapper).toMatchSnapshot();
                });
});