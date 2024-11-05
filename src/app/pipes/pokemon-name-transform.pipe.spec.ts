import { PokemonNameTransformPipe } from './pokemon-name-transform.pipe';

describe('PokemonNameTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonNameTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
