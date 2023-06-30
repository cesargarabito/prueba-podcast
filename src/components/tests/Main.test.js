import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { useState } from "react";

test("handleFilterChange actualiza correctamente el estado del filtro", () => {
  const TestComponent = () => {
    const [filterText, setFilterText] = useState("");

    const handleFilterChange = (event) => {
      setFilterText(event.target.value);
    };

    return (
      <div>
        <input
          type="text"
          placeholder="Filtrar"
          value={filterText}
          onChange={handleFilterChange}
        />
        <p>{filterText}</p>
      </div>
    );
  };

  render(<TestComponent />);

  const inputElement = screen.getByPlaceholderText("Filtrar");
  fireEvent.change(inputElement, { target: { value: "example" } });

  expect(screen.getByText("example")).toBeInTheDocument();
});
