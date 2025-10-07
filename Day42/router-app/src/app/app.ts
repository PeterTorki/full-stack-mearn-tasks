import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";

type Product = {
  id: number | string;
  name: string;
  price: number;
  category: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, Header, Footer],
})
export class App {}
