import { Notfound } from "./components/notfound/notfound";
import { ContactUs } from "./components/contact-us/contact-us";
import { User } from "./components/user/user";
import { Routes } from "@angular/router";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Users } from "./components/users/users";
import { Profile } from "./components/profile/profile";
import { Login } from "./components/login/login";
import { Web } from "./components/about/childs/web/web";
import { Mobile } from "./components/about/childs/mobile/mobile";
import { authGuard } from "./guards/auth-guard";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: Home, title: "home" },
  {
    path: "about",
    component: About,
    title: "",
    children: [
      {
        path: "",
        redirectTo: "web",
        pathMatch: "full",
      },
      {
        path: "web",
        component: Web,
      },
      {
        path: "mobile",
        component: Mobile,
      },
    ],
  },
  { path: "users", component: Users, title: "users" },
  { path: "user/:id", component: User, title: "user" },
  {
    path: "profile",
    loadComponent: () => import("./components/profile/profile").then((m) => m.Profile),
    canActivate: [authGuard],
  },
  {
    path: "contactus",
    loadComponent: () => import("./components/contact-us/contact-us").then((m) => m.ContactUs),
  },
  { path: "login", component: Login, title: "login" },
  { path: "**", component: Notfound, title: "notfound" },
];
