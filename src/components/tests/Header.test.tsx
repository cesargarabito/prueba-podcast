import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  test("debe renderizar correctamente", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    
    const headerElement = screen.getByText(/Podcast/i);
    expect(headerElement).toBeInTheDocument();

 
    const linkElement = screen.getByRole("link", { name: /podcast/i });
    expect(linkElement).toHaveAttribute("href", "/");

    
    expect(headerElement).toHaveStyle({
      color: "navy",
      textAlign: "left",
      marginBottom: "0",
    });

   
    const hrElement = screen.getByRole("separator");
    expect(hrElement).toHaveStyle({ opacity: "0.5" });
  });
});
