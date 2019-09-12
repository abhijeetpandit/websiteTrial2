import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService} from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.loadHeroes();
  }

  loadHeroes() : void {
    this.heroService.getHeros().subscribe(response => this.heroes = response);
  }
  
  add(name: string): void {
    name = name.trim();
    if(!name) {
      alert('name is blank');
      console.log('name is blank!!!');
      return;
    }
    let inputHero: Hero = {id: 0, name: name};
    this.heroService.addHero({name} as Hero).subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero().subscribe(() => this.loadHeroes());
  }
}
