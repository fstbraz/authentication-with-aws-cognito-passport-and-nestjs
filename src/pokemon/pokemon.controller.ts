import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Pokemon } from './pokemon.interface';
import { PokemonService } from './pokemon.service';

@Controller('api/v1/pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  listAllPokemons(): Array<Pokemon> {
    return this.pokemonService.listAllPokemons();
  }
}
