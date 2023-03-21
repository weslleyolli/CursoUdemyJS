import { render, screen } from "@testing-library/react";
import ListaLivros from "./ListaLivros";

test("Renderização do link para Learn React", () => {
  render(<ListaLivros />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
