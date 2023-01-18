import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  allPokemons: any = [];
  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.users();
  }

  users(): void {
    this.service
        .users()
        .subscribe((response: any) => {
          this.allPokemons = response.results;
        });
  }

}
